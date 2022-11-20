const text_right = [
	{
		type: "checkbox",
		question: "Вопрос 1",
		answers: [
			{
				text: "1",
				right: true,
				_id: "63762ada1864b83efb9205a9",
			},

			{
				text: "2",
				right: true,
				_id: "63762ada1864b83efb9205aa",
			},

			{
				text: "3",
				right: true,
				_id: "63762ada1864b83efb9205ab",
			},

			{
				text: "4",
				right: false,
				_id: "63762ada1864b83efb9205ac",
			},
		],
		_id: "63502500655037acfbfa608d",
	},

	{
		type: "text",
		question: "Вопрос 2",
		answers: [
			{
				text: "123",
				right: "123",
				_id: "63762ada1864b83efb9205ae",
			},
		],
		_id: "63502500655037acfbfa6097",
	},

	{
		type: "text",
		question: "Вопрос 3",
		answers: [
			{
				text: "123",
				right: "123",
				_id: "63762ada1864b83efb9205b0",
			},
		],
		_id: "635029c2655037acfbfa60c8",
	},

	{
		type: "radio",
		question: "Вопрос 4",
		answers: [
			{
				text: "123",
				right: true,
				_id: "63762ada1864b83efb9205b2",
			},

			{
				text: "132",
				right: false,
				_id: "63762ada1864b83efb9205b3",
			},

			{
				text: "213",
				right: false,
				_id: "63762ada1864b83efb9205b4",
			},

			{
				text: "321",
				right: false,
				_id: "63762ada1864b83efb9205b5",
			},
		],
		_id: "635045544dfecb81b36cf237",
	},
];

const text_left = [

	{
		type: "checkbox",
		question: "Вопрос 1",
		_id: "63502500655037acfbfa608d",
		answers: [
			{
				text: "1",
				_id: "63762ada1864b83efb9205a9",
				right: true,
			},

			{
				text: "2",
				_id: "63762ada1864b83efb9205aa",
				right: true,
			},

			{
				text: "3",
				_id: "63762ada1864b83efb9205ab",
				right: true,
			},

			{
				text: "4",
				_id: "63762ada1864b83efb9205ac",
			},
		],
	},

	{
		type: "text",
		question: "Вопрос 2",
		_id: "63502500655037acfbfa6097",
		answers: [
			{
				text: "123",
				_id: "63762ada1864b83efb9205ae",
				right: "321",
			},
		],
	},

	{
		type: "text",
		question: "Вопрос 3",
		_id: "635029c2655037acfbfa60c8",
		answers: [
			{
				text: "123",
				_id: "63762ada1864b83efb9205b0",
				right: "123",
			},
		],
	},

	{
		type: "radio",
		question: "Вопрос 4",
		_id: "635045544dfecb81b36cf237",
		answers: [
			{
				text: "123",
				_id: "63762ada1864b83efb9205b2",
			},

			{
				text: "132",
				_id: "63762ada1864b83efb9205b3",
			},

			{
				text: "213",
				_id: "63762ada1864b83efb9205b4",
			},

			{
				text: "321",
				_id: "63762ada1864b83efb9205b5",
				right: true,
			},
		],
	},
];
			
const findRight = (arr) => {
    let res = []
    arr.map( (a) => {
        let question = [a.question, []];
        a.answers.map( (b) => {
            if (b.right != 0 && b.right != false && b.right != undefined) {
                question[1].push(b.text);
            }
        })
        res.push(question)
    });
    return res;
}

const sort_arr = (arr) => {
    arr = arr.sort( (a, b) => {
        let keyA = a[0].split(' ')[1], keyB = b[0].split(' ')[1];
        if (keyA < keyB) return -1
        if (keyA > keyB) return 1
        return 0
    })
    return arr;
} 

const compare = (arr1, arr2) => {
    arr1 = sort_arr(arr1);
    arr2 = sort_arr(arr2);
    let compared_answers = [];
    for (let i = 0; i < arr1.length; i++) {
        let question = arr1[i][1].join('') == arr2[i][1].join('') ? "Верный ответ" : "Неверный  ответ";
        let answers = {
            "Ответы пользователя": arr1[i][1].join(' '),
            "Правильные ответы": arr2[i][1].join(' ')
        }
        compared_answers.push([arr1[i][0], question, answers])
    }
    return compared_answers
}

console.log(compare(findRight(text_left), findRight(text_right)))
