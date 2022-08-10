import { app } from '../../firebase/firebase'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

export default function handler(req, res)  {

    const db = getFirestore(app)
    const categoriesRef = collection(db, 'categories')

    if (categoriesRef) {
        getDocs(categoriesRef).then(response => {
            const project = response.docs.map(doc => ({ 
                id: doc.data().id,
                image: doc.data().image,
                title: doc.id,
                collection: doc.data().collection,
            }))
            res.json([...project].sort((a, b) => a.id - b.id))
            }).catch(error => {
                res.json('Could not get projects')
            })
    } else {
        res.json('Could not get projects')
    }
}