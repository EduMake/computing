function main() {
    // Write your code here
    var Spend = INPUT("spend");
    var LoyaltyCard = INPUT("loyalty_card");
    var Discount = "Discount not calculated yet";
    if(Spend > 100)
    {
        if(LoyaltyCard === "Yes")
        {
            Discount = "Discount 15%";
        }
        else
        {
            Discount = "Discount 5%";
        }
    }
    else
    {
        
    }
    
    OUTPUT(Discount);
}

