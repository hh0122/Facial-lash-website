const STORAGE_KEY = 'glow-ateria-customer-db';

const fallbackDb = {
  customers: {},
  indexByEmail: {},
};

let cachedDb = null;

const safeWindow = typeof window !== 'undefined' ? window : null;

const normalizeEmail = (email) => (email || '').trim().toLowerCase();

const loadDb = () => {
  if (cachedDb) {
    return cachedDb;
  }

  if (!safeWindow?.localStorage) {
    cachedDb = { ...fallbackDb };
    return cachedDb;
  }

  try {
    const raw = safeWindow.localStorage.getItem(STORAGE_KEY);
    cachedDb = raw ? JSON.parse(raw) : { ...fallbackDb };
  } catch (error) {
    console.error('Unable to read customer database', error);
    cachedDb = { ...fallbackDb };
  }

  return cachedDb;
};

const saveDb = (db) => {
  cachedDb = db;
  if (!safeWindow?.localStorage) {
    return;
  }

  try {
    safeWindow.localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  } catch (error) {
    console.error('Unable to persist customer database', error);
  }
};

const createId = () => {
  if (safeWindow?.crypto?.randomUUID) {
    return safeWindow.crypto.randomUUID();
  }

  return `cust_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
};

export const getCustomerSummary = (email) => {
  const db = loadDb();
  const normalized = normalizeEmail(email);
  const customerId = db.indexByEmail[normalized];
  if (!customerId) {
    return null;
  }

  const customer = db.customers[customerId];
  if (!customer) {
    return null;
  }

  return {
    ...customer,
    treatments: [...customer.treatments].sort((a, b) => new Date(b.date) - new Date(a.date)),
  };
};

export const addTreatment = ({ name, email, phone, service, date, time, notes }) => {
  const db = loadDb();
  const normalized = normalizeEmail(email);
  let customerId = db.indexByEmail[normalized];

  if (!customerId) {
    customerId = createId();
    db.indexByEmail[normalized] = customerId;
    db.customers[customerId] = {
      id: customerId,
      name: name?.trim() || 'Guest',
      email: normalized,
      phone: phone?.trim() || '',
      createdAt: new Date().toISOString(),
      treatments: [],
    };
  }

  const customer = db.customers[customerId];
  if (name?.trim()) {
    customer.name = name.trim();
  }
  if (phone?.trim()) {
    customer.phone = phone.trim();
  }

  const treatment = {
    id: createId(),
    service: service?.trim() || 'Consultation',
    date,
    time,
    notes: notes?.trim() || '',
    createdAt: new Date().toISOString(),
  };

  customer.treatments.push(treatment);
  saveDb(db);

  return {
    customer,
    treatment,
  };
};

export const suggestNextService = (treatments = []) => {
  if (treatments.length === 0) {
    return 'Glow Ateria consultation with a personalized service map.';
  }

  const lastService = treatments[0]?.service?.toLowerCase() || '';

  if (lastService.includes('lash')) {
    return 'Schedule a lash fill within 2-3 weeks to keep the set full.';
  }

  if (lastService.includes('facial')) {
    return 'Try the Hydration Boost Facial to maintain your glow.';
  }

  if (lastService.includes('brow')) {
    return 'Pair a brow refresh with a lash tint for definition.';
  }

  return 'Book a follow-up consultation to tailor your next treatment.';
};
