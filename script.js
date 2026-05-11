

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const resultDiv = document.getElementById('searchResult');
    const dateInput = document.getElementById('date');


    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today); 

    const availableCities = ["баку", "гянджа", "сумгаит", "габала", "ленкорань", "шеки","губа"];

    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            const departure = document.getElementById('departure').value.trim().toLowerCase();
            const arrival = document.getElementById('arrival').value.trim().toLowerCase();
            const selectedDate = new Date(dateInput.value);
            const dayOfWeek = selectedDate.getDay(); 

            resultDiv.innerText = '';

            const isDepartureOk = availableCities.includes(departure);
            const isArrivalOk = availableCities.includes(arrival);

            if (!isDepartureOk || !isArrivalOk) {
                resultDiv.style.color = "#e74c3c";
                resultDiv.innerText = "Ошибка: В выбранные города рейсы не осуществляются.";
                return;
            }

            if (dayOfWeek === 0) {
                resultDiv.style.color = "#e74c3c";
                resultDiv.innerText = "К сожалению, по воскресеньям рейсы по данному направлению не осуществляются.";
                return;
            }

            resultDiv.style.color = '#5d6d7e';
            resultDiv.innerText = `Проверка мест на ${dateInput.value}...`;
            
            setTimeout(() => {
                resultDiv.style.color = '#27ae60';
                resultDiv.innerText = 'Рейсы найдены! Перенаправляем к расписанию...';
                
                setTimeout(() => {
                    window.location.href = 'schedule.html';
                }, 1200);
            }, 1000); 
        });
    }
});