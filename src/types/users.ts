export interface Users{
    address: IntAdress[]
    company: IntCompany[]
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
}
export interface IntAdress{
    city: string
    geo: IntGeo[]
    street: string
    suite: string
    zipcode: string
}
export interface IntGeo{
    lat: string
    lng: string
}
export interface IntCompany{
    bs: string
    catchPhrase: string
    name: string
}