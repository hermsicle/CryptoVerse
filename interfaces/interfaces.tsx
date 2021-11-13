interface COIN_INTERFACE {
  CoinInfo: {
    Algorithm?: string 
    AssetLaunchDate?: string
    BlockNumber?: number
    BlockReward?: number
    BlockTime?: number
    DocumentType?: string
    FullName:string
    Id: string
    ImageUrl: string
    Internal?: string
    MaxSupply?: number
    Name: string
    NetHashesPerSecond?: number
    ProofType?: string
    Rating?: object
  },
  DISPLAY?: object
  RAW?: object
}



export type {COIN_INTERFACE}
