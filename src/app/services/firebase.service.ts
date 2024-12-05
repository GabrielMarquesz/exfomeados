import { Injectable } from '@angular/core';
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { Firestore, getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { firebaseConfig } from '../../firebaseConfig';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private app: FirebaseApp;
  private db: Firestore;

  constructor() {
    if (!getApps().length) {
      this.app = initializeApp(firebaseConfig);
      console.log('Firebase inicializado com sucesso.');
    } else {
      this.app = getApps()[0];
      console.log('Firebase já estava inicializado.');
    }
    this.db = getFirestore(this.app);
  }

  async salvarPedido(pedido: any) {
    try {
      const docRef = await addDoc(collection(this.db, 'pedidos'), pedido);
      console.log('Pedido salvo com ID:', docRef.id);
      return docRef;
    } catch (error) {
      console.error('Erro ao salvar pedido:', error);
      throw error;
    }
  }

  async getPedidos() {
    try {
      const querySnapshot = await getDocs(collection(this.db, 'pedidos'));
      return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Erro ao recuperar pedidos:', error);
      throw error;
    }
  }
}
