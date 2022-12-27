
import { useState } from "react";

const useStateExample = () => {


    // APIDEN VERİ ÇEKME DE KULLANACAĞIM STATLERİ TANIMLADIM.
  const [userImage, setUserImage] = useState(); // GELEN RESMİ YAKALAMAK İÇİN
  const [error, setError] = useState(""); // HATA MESAJI VERMEK İÇİN
  const [loading, setLoading] = useState(false); // VERİ GELENE KADAR Kİ BUTONUN DURUMUNU PASİF ETMEK İÇİN

  // APİDEM VERİYİ GETİRECEK FONKSİYONU TANIMLADIM.
  const getUser = async () => {
    const url = "https://randomuser.me/api";
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setUserImage(data.results[0]);
      setError("");
    } catch (error) {
      setError("DATA CAN NOT BE FETCHED");
      setUserImage("");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(error);
  console.log(userImage);

  return (
    <div >
    <div> 
    <button
      onClick={getUser}
      {/*Butona tıklandığınca veri gelene kadar ya da hata mesajı gelenekadar buton pasif olacak */}
      disabled={loading}
      style={{ display: "block", margin: "1rem auto" }}
    >
      Get User Image
    </button>
    {/*Hata olursa hata mesajını gösterecek.*/}
    {error && <h2>{error}</h2>}
    
    {userImage && <img width="15%" src={userImage.picture?.medium} alt="img" />
    }
    {userImage && <p>  {userImage.name.first} {userImage.name.last}</p> }
    </div>
  </div>
  )
}

export default useStateExample




