import { db } from '../config/firebase.js';

const collection = () => db.collection('products');

export const getAll = async () => {
  const snap = await collection().get();
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const getById = async (id) => {
  const doc = await collection().doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
};

export const create = async (payload) => {
  const ref = await collection().add(payload);
  const doc = await ref.get();
  return { id: doc.id, ...doc.data() };
};

export const remove = async (id) => {
  const docRef = collection().doc(id);
  const doc = await docRef.get();
  if (!doc.exists) return null;
  await docRef.delete();
  return { id, deleted: true };
};
