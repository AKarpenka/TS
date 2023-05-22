// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:
interface PlayerData<T> {
	game: string | number;
	hours: T;
	server: string;
}

const player1: PlayerData<number> = {
	game: "CS:GO",
	hours: 300,
	server: "basic",
};

const player2: PlayerData<string> = {
	game: 2048,
	hours: "300 h.",
	server: "arcade",
};

const player3: PlayerData<{total: number, inMenu: number}> = {
	game: "Chess",
	hours: {
		total: 500,
		inMenu: 50,
	},
	server: "chess",
};

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

enum FigureNames {
	Rect = "rect",
	Triangle = "triangle",
	Line = "line",
	Circle = "circle"
}

interface IFigureRequire {
	name: FigureNames;
}

// function toFigureObj<T extends IFigureRequire>(data: T): T {
// 	return data;
// }

interface IFigureAllData <T extends IFigureRequire> {
	data: T
}

interface AmountOfFigures {
	squares: number;
	circles: number;
	triangles: number;
	others: number;
}

function calculateAmountOfFigures<IFigureAllData>(figure: IFigureAllData[]): AmountOfFigures {
	let amountOfFigures: AmountOfFigures = {
		squares: 0,
		circles: 0,
		triangles: 0,
		others: 0
	}

	figure.forEach((obj: any) => {
		switch (obj.name) {
			case FigureNames.Rect:
				amountOfFigures.squares += 1;
				break;
			case FigureNames.Circle:
				amountOfFigures.circles += 1;
				break;
			case FigureNames.Triangle:
				amountOfFigures.triangles += 1;
				break;
			default:
				amountOfFigures.others += 1;
				break;
		}
	});
	
	return amountOfFigures;
}

const data = [
	{
		name: "rect",
		data: { a: 5, b: 10 },
	},
	{
		name: "rect",
		data: { a: 6, b: 11 },
	},
	{
		name: "triangle",
		data: { a: 5, b: 10, c: 14 },
	},
	{
		name: "line",
		data: { l: 15 },
	},
	{
		name: "circle",
		data: { r: 10 },
	},
	{
		name: "circle",
		data: { r: 5 },
	},
	{
		name: "rect",
		data: { a: 15, b: 7 },
	},
	{
		name: "triangle",
	},
];

console.log(calculateAmountOfFigures(data));