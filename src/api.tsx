export type Location = {
    latitude: number
    longitude: number
}

export type Node = {
    address: string,
    location: Location,
    superPeer?: string
}