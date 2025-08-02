export const ContactInformation :ContactInfo = {
CompanyName:"PixelNest Solution",
MobileNumber1:"8690743143",
MobileNumber2:"9157514460",
Email:"support@pixelnestsolution.com",
Address1:"Shashtri Nagar",
PinCode:"380013",
City:"Ahmedabad",
Country:"india"
}



export interface ContactInfo {
    CompanyName: string,
    MobileNumber1: string,
    MobileNumber2: string,
    Email:string,
    Address1:string,
    PinCode:string,
    City:string,
    Country:string
}