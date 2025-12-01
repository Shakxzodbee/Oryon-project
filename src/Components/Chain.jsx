import '../assets/css/chain.css'
const Chain = () => {
    return (
        <div>
            <h3 style={{color: "rgba(26, 27, 31, 1)" , fontSize: "32px" , fontWeight: "500" , lineHeight:"32px" , textAlign: "center" , marginTop:"64px" , marginBottom: "32px"}}> Compliance Is Becoming On-Chain</h3>
            <div className='kontrol'>
                <button className='finish-span' style={{fontSize: "16px" , fontWeight: "400" , lineHeight:"24px", marginLeft: "10px"}}>2–5 days </button>
                <button className='finish-span' style={{fontSize: "16px" , fontWeight: "400" , lineHeight:"24px", marginLeft: "10px"}}>Tokenized assets settle instantly, globally, 24/7</button>
                <button className='finish-span' style={{fontSize: "16px" , fontWeight: "400" , lineHeight:"24px", marginLeft: "10px"}}>high intermediaries</button>
                <button className='finish-span' style={{fontSize: "16px" , fontWeight: "400" , lineHeight:"24px", marginLeft: "10px"}}>high reconciliation cost  </button>
            </div>
        </div>
    );
};

export default Chain;