import { Link } from "react-router-dom"
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg"
import { ReactComponent as EditIcon } from "../assets/svg/editIcon.svg"
import bedIcon from "../assets/svg/bedIcon.svg"
import bathtubIcon from "../assets/svg/bathtubIcon.svg"

const ListingItem = ({ listing, id, onEdit, onDelete }) => {
    return (
        <li className="categoryListing">
            <Link
                to={`/category/${listing.type}/${id}`}
                className="categoryListingLink"
            >
                <img
                    src={listing.imgUrls[0]}
                    alt={listing.name}
                    className="categoryListingImg"
                />
                <div className="categoryListingDetails">
                    <p className="categoryListingLocation">
                        {listing.location}
                    </p>
                    <p className="categoryListingName">{listing.name}</p>
                    <p className="categoryListingPrice">
                        $
                        {listing.offer
                            ? listing.discountedPrice
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                            : listing.regularPrice
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        {listing.type === "rent" && " / Month"}
                    </p>
                    <p className="categoryListingInfoDiv">
                        <img src={bedIcon} alt="Bed" />
                        <p className="categoryListingInfoText">
                            {listing.bedrooms > 1
                                ? `${listing.bedrooms} Bedrooms`
                                : "1 Bedroom"}
                        </p>
                        <img src={bathtubIcon} alt="Bath" />
                        <p className="categoryListingInfoText">
                            {listing.bathrooms > 1
                                ? `${listing.bathrooms} Bathrooms`
                                : "1 Bathroom"}
                        </p>
                    </p>
                </div>
            </Link>

            {onDelete && (
                <DeleteIcon
                    className="removeIcon"
                    fill="rgb(231, 76,60)"
                    onClick={() => onDelete(listing.id, listing.name)}
                />
            )}
            {onDelete && (
                <EditIcon
                    className="editIcon"
                    fill="rgb(231, 76,60)"
                    onClick={() => onEdit(listing.id)}
                />
            )}
        </li>
    )
}

export default ListingItem
