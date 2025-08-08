import { ColorValue, ViewStyle } from "react-native"

export interface Ride {
    id: number,
    name: string,
    area: string,
    distance: string,
    eta: string,
    price: number,
    rating: number,
    type: string,
    seats: number,
}

export interface RideCardProps {
    ride: Ride
    onPress: ()=>void
    borderColor: ColorValue
}