import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    
    const PriceOptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to gym equipment",
              "Free group fitness classes",
              "1 personal training session per month",
              "24/7 gym access",
              "Monthly wellness workshops",
              "Free locker usage"
            ]
          },
          {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
              "All Basic Membership features",
              "Unlimited group fitness classes",
              "2 personal training sessions per month",
              "Access to pool and sauna",
              "Discounts on merchandise",
              "Guest access once per month",
              "Free fitness assessment"
            ]
          },
          {
            "id": 3,
            "name": "Premium Membership",
            "price": 69.99,
            "features": [
              "All Standard Membership features",
              "Unlimited personal training sessions",
              "Nutrition consultation",
              "Priority booking for classes and sessions",
              "Guest passes for friends",
              "Access to specialty classes (e.g., yoga, pilates)",
              "Monthly one-on-one wellness coaching"
            ]
          },
          {
            "id": 4,
            "name": "Family Membership",
            "price": 99.99,
            "features": [
              "Access for up to 4 family members",
              "All Premium Membership features",
              "Family fitness classes",
              "Discounted rates for additional family members",
              "Monthly family wellness workshops",
              "Access to kids’ play area",
              "Free family fitness challenges"
            ]
          }
        ]
      


      
    return (
        <div className=" m-12 mt-20">
            <h2 className="text-5xl mb-5">Best prices in the town</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;