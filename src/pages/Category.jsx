import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
    collection,
    getDocs,
    query,
    where,
    orderBy,
    limit,
    startAfter,
} from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"
import Spinner from "../components/Spinner"

const Category = () => {
    const [listings, setListings] = useState(null)
    const [loading, setLoading] = useState(true)
    const params = useParams()
    useEffect(() => {
        const fetchListings = async () => {
            try {
                //Get reference
                const listingsRef = collection(db, "listings")
                //Create a query
                const q = query(
                    listingsRef,
                    where("type", "==", params.categoryName),
                    orderBy("timestamp", "desc"),
                    limit(10)
                )
                //Execute query
                const querySnap = await getDocs(q)
                const listings = []
                querySnap.forEach((doc) => {
                    return listings.push({
                        id: doc.id,
                        data: doc.data(),
                    })
                })
                setListings(listings)
                setLoading(false)
            } catch (err) {
                toast.error("Could not fetch listings.")
            }
        }
        fetchListings()
    }, [params.categoryName])

    return (
        <div className="category">
            <header className="pageHeader">
                Places for {params.categoryName}
            </header>
            {loading ? (
                <Spinner />
            ) : listings && listings.length > 0 ? (
                <>
                    <main>
                        <ul className="categoryListing">
                            {listings.map((listing) => (
                                <h1>{listing.data.name}</h1>
                            ))}
                        </ul>
                    </main>
                </>
            ) : (
                <p>No Listings for {params.categoryName}</p>
            )}
        </div>
    )
}

export default Category
