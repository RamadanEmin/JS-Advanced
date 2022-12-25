function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const input = JSON.parse(document.querySelector('div#inputs textarea').value);
      const restaurants = {};
      const workerData = [];
      let highestAvgSalary = 0;
      let bestRestaurant = '';

      for (const line of input) {
         let [restaurantName, workers] = line.split(' - ');
         workers = workers.split(', ');
         for (const worker of workers) {
            let [workerName, salary] = worker.split(' ');
            if (!restaurants.hasOwnProperty(restaurantName)) {
               restaurants[restaurantName] = {};
            }
            restaurants[restaurantName][workerName] = Number(salary);
         }
      }
      for (const restaurant in restaurants) {
         let avgSalary = 0;
         const salaries = Object.values(restaurants[restaurant]);
         for (const salary of salaries) {
            avgSalary += salary;
         }
         avgSalary /= salaries.length;
         if (avgSalary > highestAvgSalary) {
            highestAvgSalary = avgSalary;
            bestRestaurant = restaurant;
         }
      }
      const bestRestaurantSorted = Object.entries(restaurants[bestRestaurant]).sort((a, b) => b[1] - a[1]);
      for (const [name, salary] of bestRestaurantSorted) {
         workerData.push(`Name: ${name} With Salary: ${salary}`)
      }
      document.querySelector(`div#bestRestaurant p`)
         .textContent = `Name: ${bestRestaurant} Average Salary: ${highestAvgSalary.toFixed(2)} Best Salary: ${bestRestaurantSorted[0][1].toFixed(2)}`;
      document.querySelector(`div#workers p`).textContent = workerData.join(' ');
   }
}