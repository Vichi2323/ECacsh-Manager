export interface ImportEnvironmentRequest {
    userName?: string
    email?: string
    phoneNumber?: string
    password?: string
    confirmPassword?: string
    environmentName?: string
    dbServer?: string
    numOfLocations?: number
    numOfPoses?: number
    numOfMobilePoses?: number
    expiryDate?: string
    isWarehousingEnabled?: boolean
    numberOfWarehouses?: number
    isInvoicingEnabled?: boolean
    isAccountingJournalEnabled?: boolean
    isCustomersEnabled?: boolean
    isRegularGuestEnabled?: boolean
    isDeliveryEnabled?: boolean



}



// function mapToRequest(data){
//     return {
//         UserInfo :{
//             userName : data.userName,

//         },
//         EnvironmentInfo:{
//             environmentName : data.environmentname
//         }
//     }
// }