console.log("Hello!!");

//JSON data need to go in diff file

const backendData = [
    {
      id: "1",
      name: "Office Map"
    },
    {
      id: "2",
      name: "New Employee Onboarding",
      children: [
        {
          id: "8",
          name: "Onboarding Materials"
        },
        {
          id: "9",
          name: "Training"
        }
      ]
    },
    {
      id: "3",
      name: "Office Events",
      children: [
        {
          id: "6",
          name: "2018",
          children: [
            {
              id: "10",
              name: "Summer Picnic"
            },
            {
              id: "11",
              name: "Valentine's Day Party"
            },
            {
              id: "12",
              name: "New Year's Party"
            }
          ]
        },
        {
          id: "7",
          name: "2017",
          children: [
            {
              id: "13",
              name: "Company Anniversary Celebration"
            }
          ]
        }
      ]
    },
    {
      id: "4",
      name: "Public Holidays"
    },
    {
      id: "5",
      name: "Vacations and Sick Leaves"
    }
  ];
  
  function fetchData() {
    return new Promise(resolve => {
      setTimeout(resolve, 100, backendData);
    });
  }

  //Code

async function getData(){
    let data = null;
    try {
        //data = await fetchData();
        processData(backendData);
    } catch (error) {
        console.log(error);
    }

}

function processData(data = []){
    //loop
    //make UI elements

    console.log("Hello, your in processData")

    let count = 0;
    
    data.forEach(firstEle => {
        // for (const key in firstEle) {
        //     if(key == "name") {
        //         addDataIntoHtml(firstEle[key])
        //     }
        //     let childArray = firstEle[key];
        //     if(key == "children") {
        //         for (const key in childArray) {
        //             console.log("Child KEY:",childArray[key])
        //             if(key == "name"){
        //                 addDataIntoHtml(firstEle[key], true)
        //             }
        //             if(key == "children") {
        //                 for (const key in childArray) {
        //                     console.log("Child KEY:",childArray[key])
        //                     if(key == "name"){
        //                         addDataIntoHtml(firstEle[key], true)
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }
        loopArrayObject(firstEle)
    });

    //data.forEach(loopArray);
}

function loopArrayObject(object, htmlEle, childArray=false, secondLevelChild = false){
    if(childArray) console.log("Inside loopArrayObjects ", object);
    for (const key in object) {
        if(childArray)console.log(object[key])
        if(key == "name"){
          var htmlEle =  addDataIntoHtml(object[key], htmlEle, childArray, secondLevelChild)
        }
        if(key == "children") {
            let childArray = object[key];
            // console.log('inside Children',childArray, typeof childArray, childArray.length);
            childArray.forEach((childArray)=>{
                console.log(childArray)
                if(childArray.children){
                    loopArrayObject(childArray, htmlEle, true, true)
                } else {
                    loopArrayObject(childArray, htmlEle, true)
                }
            })
        }
    }
}

let officeID = document.getElementById("office");
// let ul = document.createElement('ul');
// ul.setAttribute('id', 'list');
// console.log("ul",{ul})


//Creates UL and appends li if child is present
function addDataIntoHtml(ele, htmlEle, children= false, secondLevelChild = false) {
    if(secondLevelChild) alert()
    if(children) {
        if(secondLevelChild) {
            let ul = document.createElement('ul');
            ul.innerHTML = ele;
            const toAppend = officeID.lastElementChild;
            toAppend.appendChild(ul);
        } else {
            const li = document.createElement('li');
            li.innerHTML = ele;
            const toAppend = officeID.lastElementChild;
            toAppend.appendChild(li);
        }
    } else {
        // let ul = null;
        htmlEle = htmlEle || document.createElement('ul');
        //ul = document.createElement('ul');
        htmlEle.innerHTML = ele;
        officeID.appendChild(htmlEle)
        // officeID.innerHTML += `<ul> ${ele} </ul>`;
    }
}


function processChildren(array =[]){
    array.forEach(ele)
}

//This methos is not required, kind of a placeholder to extend in future for more ol and other elements
function createElement(ele){
    //return HTML element

    console.log("Inside create element");

    if(ele === "UL") {
        return document.createElement("ul")
    }
    if(ele === "li") {
        return document.createElement("li")
    }
   
}

getData();


