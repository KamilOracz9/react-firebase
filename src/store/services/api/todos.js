import {db} from '../../../firebase';
import {collection, getDocs} from 'firebase/firestore';

const usersCollectionRef = collection(db, 'todos');

export default {
    loadAllTodos: async () => {
        const response = await getDocs(usersCollectionRef);

        return response.docs.map(doc => (
            {
                id: doc.id,
                task: doc.data().task,
                done: doc.data().done
            }
        ));
    }
}