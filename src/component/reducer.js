// reducer'ın kullanım amacı stateleri azaltmak ve kodlamanın daha yalın yapılmasını sağlamak.

//Bunun için önce statelerin başlangıç değerlerini obje olarak tanımlıyoruz.
export const initialState = {
  loading: false,
  userImage: "",
  error: "",
};

// reducer fonksiyonu tanımlıyoruz. Kendisi state ve action olarak parametre almakta.
// buradaki state kullanıdığımız stateleri tanımlamak için action ise gelen verileri kullanıcıya aktarmak için kullanıyoruz.
export const reducer = (state, action) => {
  // bunun için switch key kullanmak mantıklı çünkü birden fazla durum söz konusu bizim örneğimizde 3 tane ama bu farklı örneklerde artabilir.

  // ilk durum başlangıç durumu case verdiğimiz isimler veri çektiğimiz yerde kullandığımız isinler aynı olmalı "START" VB.
  switch (action.type) {
    case "START":
      // BAŞLANGIÇ STATETİNİ AÇIYORUM. SONRA BAŞLANGIÇTAKİ STATELERE GÖRE TANIMLIYORUM
      return { ...state, loading: true, userImage: "", error: "" };

    // VERİNİN GELMESİNE GÖRE STATLERİ TANIMLIYORUM. BURADA VERİ ÇEKİLME İŞLEMİ BAŞARILI İSE payload ile veriyi göstereceğim.
    case "SUCCESS":
      return { ...state, userImage: action.payload, error: "", loading: false };
    // VERİNİN GELMESİNE GÖRE STATLERİ TANIMLIYORUM. BURADA VERİ ÇEKİLME İŞLEMİ BAŞARISIZ İSE payload ile hata mesajını göstereceğim.
    case "FAIL":
      return { ...state, catImage: "", error: action.payload, loading: false };
    default:
      break;
  }
};
