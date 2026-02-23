

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore/lite"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPkce8uG1H_Dp1aKq5loB6LcLPR35IDPY",
  authDomain: "vanlife-d0a84.firebaseapp.com",
  projectId: "vanlife-d0a84",
  storageBucket: "vanlife-d0a84.firebasestorage.app",
  messagingSenderId: "826505796278",
  appId: "1:826505796278:web:21e9b4bf5120656d3f6417"
};

// "vanlife-d0a84"

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


// import { collection, getDocs } from "firebase/firestore";

// const querySnapshot = await getDocs(collection(db, "cities"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });

const vansCollectionRef = collection(db, "vans")

// Refactoring the fetching functions below

// ========================
export async function getVans() {
    try {
        const snapshot = await getDocs(vansCollectionRef) // Get ALL docs
        const vans = snapshot.docs.map(doc => ({ // Loop through each doc
        ...doc.data(), // Spread the van data (name, price, etc.)
        id: doc.id // Add the document ID
        }))
        return vans
    } catch (error) {
        throw {
            message: "Failed to fetch vans",
            statusText: error.message,
            status: error.code || 500
        }
    }
}

export async function getVan(id) {

    console.log("🔵 getVan called with ID:", id)

    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef) // Get ONE doc

    console.log("🟡 Snapshot exists?", snapshot.exists())
    console.log("🟢 Snapshot data:", snapshot.data())

     if (!snapshot.exists()) {
        throw new Error(`Van with ID ${id} not found`)
    }

    const van = {
        ...snapshot.data(),
        id: snapshot.id
    }
    
    console.log("✅ Returning van:", van)
    return van

    // return {
    //     ...snapshot.data(), // Spread the van data
    //     id: snapshot.id     // Add the document ID
    // }
}

// (USE INSIDE VANDETAIL)
// ======================

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))

    const snapshot = await getDocs(q) // Get ALL docs
    const vans = snapshot.docs.map(doc => ({ // Loop through each doc
        ...doc.data(), // Spread the van data (name, price, etc.)
        id: doc.id // Add the document ID
    }))
    return vans
}



// export async function getVans() {
//     const res = await fetch("/api/vans")
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans", 
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

// A function whose only purpose is to delay execution
// for the specified # of milliseconds when used w/ `await`
// e.g. inside an async function:
// await sleep(2000)  => pauses the function for 2 seconds before moving on
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(() => resolve(), ms))
// }

// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

// ========= (OLD)
// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}