
import { useReducer } from "react";
import { initialState, reducer } from "./reducer";

const UseReducerExample = () => {


    // APIDEN VERİ ÇEKME DE KULLANACAĞIM STATLERİ TANIMLADIM.
  // const [userImage, setUserImage] = useState(); // GELEN RESMİ YAKALAMAK İÇİN
  // const [error, setError] = useState(""); // HATA MESAJI VERMEK İÇİN
  // const [loading, setLoading] = useState(false); // VERİ GELENE KADAR Kİ BUTONUN DURUMUNU PASİF ETMEK İÇİN

  // // APİDEM VERİYİ GETİRECEK FONKSİYONU TANIMLADIM.

  // reducer ile yaptığımız stateleri kullanmak için useReducer Hook'unu kullanıyoruz.
  // Ayrıca bunları import ediyoruz.
  // bu hook yine 2 adet parametre alıyor. fonksiyonun kendisini ve başlangıç statelerini
  // bunuda statelere aktarıyor ve gelen veriyi de dispatch ile kullanıcıya gösteriyoruz.
  const [state, dispatch] = useReducer(reducer, initialState);

  const { loading, error, userImage } = state;


  const getUser = async () => {


    const url = "https://randomuser.me/api";
    // setLoading(true);
    dispatch({type:"START"})
    try {
      const res = await fetch(url);
      const data = await res.json();
      // setUserImage(data.results[0]);
      // setError("");
      dispatch({type: "SUCCESS", payload:data.results[0]})
    } catch (error) {
      // setError("DATA CAN NOT BE FETCHED");
      // setUserImage("");
      dispatch({type:"FAIL", payload: "DATA CAN NOT BE FETCHED" })
    } finally {
      // setLoading(false);
      dispatch({type:"START"})
    }
  };
  // console.log(error);
  // console.log(userImage);

  return (
    <div >
    <div> 
    <button
      onClick={getUser}
      disabled={loading}
      style={{ display: "block", margin: "1rem auto" }}
    >
      Get User Image
    </button>
    {error && <h2>{error}</h2>}
    {userImage && <img width="15%" src={userImage.picture?.medium} alt="img" />
    }
    {userImage && <p>  {userImage.name.first} {userImage.name.last}</p> }
    </div>
  </div>
  )
}

export default UseReducerExample




