document.getElementById('mealForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const mealName = document.getElementById('mealName').value;
    const calories = parseFloat(document.getElementById('calories').value);
    const protein = parseFloat(document.getElementById('protein').value);
    const carbs = parseFloat(document.getElementById('carbs').value);
    const fat = parseFloat(document.getElementById('fat').value);

    // Create new meal item
    const mealList = document.getElementById('mealList');
    const mealItem = document.createElement('li');
    mealItem.textContent = `${mealName} - Calories: ${calories}, Protein: ${protein}g, Carbs: ${carbs}g, Fat: ${fat}g`;
    mealList.appendChild(mealItem);

    // Update nutrition summary
    updateNutritionSummary(calories, protein, carbs, fat);

    // Clear form fields
    document.getElementById('mealForm').reset();
});

let totalCalories = 0;
let totalProtein = 0;
let totalCarbs = 0;
let totalFat = 0;

function updateNutritionSummary(calories, protein, carbs, fat) {
    totalCalories += calories;
    totalProtein += protein;totalCarbs += carbs;
    totalFat += fat;

    document.getElementById('totalCalories').textContent = totalCalories;
    document.getElementById('totalProtein').textContent = totalProtein;
    document.getElementById('totalCarbs').textContent = totalCarbs;
    document.getElementById('totalFat').textContent = totalFat;
}

