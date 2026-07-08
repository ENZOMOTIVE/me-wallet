document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener("click",handler);
});

function handler() {
    document.getElementById("center").style.display = "flex";

    const private_key = document.getElementById("private_key").value;
    const amount = document.getElementById("amount").value;
    const address = document.getElementById("amount").value;

    test_p = "c2796498187181a425ed0b2200f58ae7ad045accde7ef720044d18d11e1d0ffb"; //private_key
    test_a = "0xe3F292F78B90127Ec3c90850c30388B13EfCFEbb";  //wallet_address

    //Provider
    const provider = new ethers.providers.JsonRpcProvider("RPC_LINK");

    let wallet = new ethers.Wallet(private_key, provider);

    const tx = {
        to: address,
        value: ethers.util.parseEther(amoount),
    };

    var a = document.getElementById("Link");
    a.href = "someLink url";

}