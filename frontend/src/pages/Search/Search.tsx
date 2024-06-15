import { useQuery } from "react-query";
import { useSearchcontext } from "../../contexts/SearchContext"
import { useSearchParams } from "react-router-dom";
import * as apiClient from '../../api-client'
import { useState } from "react";

const Search = () => {
    const search = useSearchcontext();
    const [page, setPage] = useState<number>(1);
    const [selectedStars, setSelectedStars] = useState<string[]>([]);
    const [selectedHotelTypes, setSelectedHotelTypes] = useState<string[]>([]);
    const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
    const [selectedPrice, setSelectedPrice] = useState<number | undefined>();
    const [sortOption, setSortOption] = useState<string>("");

    const searchParams = {
        destination: search.destination,
        checkIn: search.checkIn.toISOString(),
        checkOut: search.checkOut.toISOString(),
        adultCount: search.adultCount.toString(),
        childCount: search.childCount.toString(),
        page: page.toString(),
        stars: selectedStars,
        types: selectedHotelTypes,
        facilities: selectedFacilities,
        maxPrice: selectedPrice?.toString(),
        sortOption,
    };

    const { data: hotelData } = useQuery(["searchHotels", useSearchParams], () => {
        apiClient.searchHotels(searchParams)
    })
    return (
        <div>
            Search Page
        </div>
    )
}

export default Search
