import { collection, getDocs } from "firebase/firestore";
export { getData }




const getData = async () => {
    const { $db } = useNuxtApp();
    const querySnapshot = await getDocs(collection($db, "productos"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
}








