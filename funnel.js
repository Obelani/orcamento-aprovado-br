/* =====================================================
   LINKS DE CHECKOUT — TROQUE SÓ AQUI (vale para toda a página)
   Cada botão tem data-checkout="NOME" e recebe o link abaixo.
   Quando tiver os links da Mivvo (ou outra plataforma),
   substitua os placeholders pelas URLs completas.
   ===================================================== */
var CHECKOUT = {
  SIMPLES:   "#CHECKOUT_SIMPLES",   // Plano Simples R$ 10,00
  COMPLETO:  "#CHECKOUT_COMPLETO"   // Kit Completo R$ 27,90
};

(function(){
  // 1) Aplica os links de checkout (repassa UTMs/parâmetros da URL atual)
  var qs = location.search ? location.search.slice(1) : "";
  var CHECKOUT_EVENTS = {
    SIMPLES:  { value: 10.00, content_name: "Plano Simples" },
    COMPLETO: { value: 27.90, content_name: "Kit Completo" }
  };
  document.querySelectorAll("[data-checkout]").forEach(function(a){
    var key = a.getAttribute("data-checkout");
    var url = CHECKOUT[key] || "#";
    if (qs && url.indexOf("http") === 0) url += (url.indexOf("?") > -1 ? "&" : "?") + qs;
    a.setAttribute("href", url);
    a.addEventListener("click", function(){
      if (typeof fbq !== "function") return;
      if (url.indexOf("http") !== 0) return;
      var ev = CHECKOUT_EVENTS[key];
      if (!ev) return;
      fbq("track", "InitiateCheckout", { value: ev.value, currency: "BRL", content_name: ev.content_name });
    });
  });

  // 2) Barra fixa no celular (aparece depois do hero)
  var st = document.querySelector(".sticky");
  if (st) window.addEventListener("scroll", function(){
    st.classList.toggle("on", window.scrollY > 600);
  }, {passive:true});
})();
