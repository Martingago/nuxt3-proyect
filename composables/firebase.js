import { collection, getDocs } from "firebase/firestore";

export { getDataFromStore }


const getDataFromStore = async () => {
    const data = []
    const { $db } = useNuxtApp();
    const querySnapshot = await getDocs(collection($db, "productos"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        data.push(doc.data())
        //console.log(doc.id, " => ", doc.data());
    });
    return data;
}








