import { app } from '../../../firebase/firebase'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

export default async function handler(req, res)  {

    const { id } = req.query

    const db = getFirestore(app)
    const categoriesRef = collection(db, 'categories')

    if (categoriesRef) {
        getDocs(categoriesRef).then(response => {
            let project = response.docs.map(doc => ({ 
                id: doc.data().id,
                image: doc.data().image,
                title: doc.id,
                collection: doc.data().collection,
            }))
                project = [...project].sort((a, b) => a.id - b.id)
                res.json(project[id-1])
            }).catch(error => {
                res.json('Could not get projects')
            })
    } else {
        res.json('Could not get projects')
    }
}