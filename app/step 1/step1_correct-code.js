const form = document.getElementById('registrar');
const input = form.querySelector('input');

const mainDiv = document.querySelector('.main');
const ul = document.getElementById('invitedList');



/***
 * 
 *
 *  CREATE A FILTER LABEL AND CHECKBOX. APPEND THEM TO THE DOM. NO FUNCTIONALITY NEEDS TO BE ADDED YET.
 *  
 *  1. CREATE THREE ELEMENTS:
 *  - A DIV ELEMENT
 *  - A LABEL ELEMENT
 *  - A INPUT ELEMENT
 * 
 *  2. ADD SOME TEXT TO THE LABEL AND DETERMINE THE INPUT TYPE.
 *  3. APPEND THE LABEL AND CHECKBOX TO THE DIV, AND THEN APPEND THE DIV BEFORE THE UL VARIABLE. 
 * 
 */

const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckBox = document.createElement('input');

filterLabel.textContent = "Hide those who haven't responded";
filterCheckBox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckBox);
mainDiv.insertBefore(div, ul);


/***
 * 
 *
 *  CREATE AN EVENT WHICH LISTENS FOR THE CHECKBOX. 
 *  
 *  1. STORE THE FILTECHECKBOX VARIABLE AND ITS CHECKED PROPERTY IN A VARIABLE. ALSO GAIN A REFERENCE TO ALL LIST ITEMS THAT ARE DECENDENTS OF THE UL VARIABLE.
 *  
 *  2. CHECK IF THE FILTERCHECKBOX HAS BEEN CHECKED. IF TRUE DO THE FOLLOWING:
 *  -   LOOP THE ALL LIST ITEMS.
 *  -   CREATE A LET VARIABLE WHICH STORES THE LIST ITEMS WITH THE COUNTER VARAIBLE AS ITS INDEX
 *  -   THEN CREATE A A IF STATEMENT. CHECK WEATHER IF THE LIST ITEMS CLASSNAME IS 'responded'. 
 *  -   IF TRUE, THEN SET ITS DISPLAY PROPERTY TO INITIAL. IF FALSE THEN SET ITS DISPLAY PROPERTY TO NONE.
 *   
 *  3. IF THE IF STATEMENT IS FALSE, LOOP THEROUGH ALL LIST ITEMS AND SET ITS DISPLAY PROPERTY TO INITIAL.
 * 
 *  - A LABEL ELEMENT
 *  - A INPUT ELEMENT
 * 
 *  2. ADD SOME TEXT TO THE LABEL AND DETERMINE THE INPUT TYPE.
 *  3. APPEND THE LABEL AND CHECKBOX TO THE DIV, AND THEN APPEND THE DIV BEFORE THE UL VARIABLE. 
 * 
 */

filterCheckBox.addEventListener('change', (e) => {
  const isChecked = e.target.checked;
  const lis = ul.children;
  if(isChecked) {
    for (let i = 0; i < lis.length; i += 1) {
      let li = lis[i];
      if (li.className === 'responded') {
        li.style.display = '';  
      } else {
        li.style.display = 'none';                        
      }
    }
  } else {
    for (let i = 0; i < lis.length; i += 1) {
      let li = lis[i];
      li.style.display = '';
    }                                 
  }
});


/***
 * 
 *
 *  CREATE A FUNCTION WHICH RETURNS A LIST ITEM WITH SEVERAL CHILD ELEMENTS. THIS FUNCTION WILL HAVE ONE PAREMETER CALLED 'text'.
 *  
 *  1. CREATE TWO ELEMENTS, A LIST ITEM AND A SPAN ELEMENT.
 *  - SET THE TEXTCONTENT OF THE SPAN ELEMENT TO WHATEVER IS PASSED THROUGH AS AN ARGUEMENT TO THE FUNCTION.
 *  - APPEND THE SPAN TO THE LIST ITEM.
 * 
 *  2. CREATE A LABEL ELEMENT AND SET ITS TEXT CONTENT TO 'Confirmed'. 
 *  -  THEN CREATE A INPUT ELEMENT AND DEFINE ITS TYPE OF CHECKBOX.
 *  -  THEN APPEND THE CHECKBOX TO THE LAVEL, AND THEN APPEND THE LAVEL TO THE LIST ITEM.
 * 
 *  3. CREATE A BUTTON ELEMENT, SET ITS TEXT CONTENT TO 'edit' AND THEN APPEND IT TO THE LIST ITEM.
 * 
 *  4.  DO THE SAME AS STEP 3 BUT SET THE TEXT CONTENT TO 'remove'.
 * 
 *  5. RETURN THE LIST ITEM.
 * 
 */


function createLI(text) {
  const li = document.createElement('li');
  const span = document.createElement('span');  
  span.textContent = text;
  li.appendChild(span);

  const label = document.createElement('label');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);  

  const editButton = document.createElement('button');
  editButton.textContent = 'edit';
  li.appendChild(editButton);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'remove';
  li.appendChild(removeButton);
  return li;
}


/***
 * 
 *
 *  CREATE A CLICK EVENT FOR THE FORM.
 * 
 *  1. PREVENT TEH DEFAULT BEHAVIOUR OF A FORM, WHICH REFRESHES WHENEVER THE SUBMIT BUTTON IS CLICKED.
 *  2. STORE THE VALUE OF THE INPUT VARIABLE.
 *  3. THEN CREATEA ANOTHER VARIAVBLE AND STORE THE CREATELI FUNCTION WITH THE INPUT VALUE PASSED THROUGH AS AN ARGUEMENT 
 *  4. APPEND THE CREATELI STORED FUNCTION VARIABLE TO THE UL
 * 
 * 
 */


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = '';
  const li = createLI(text);
  ul.appendChild(li);
});
  

/***
 * 
 *
 *  CREATE A CHANGE EVENT FOR THE UL VARIABLE. THIS WILL LISTEN FOR THE CHECKBOX
 * 
 *  1. STORE THE EVENT AND ITS TARGET IN A VARIABLE CALLED CHECKBOX.
 *  2. STORE THE CHECKED PROPERTY OF THE ABOVE VARAIBLE IN A NEW VARIABLE CALLED CHECKED. 
 *  3. REFERENCE THE GRANDPARENT OF THE CHECKED VARIABLE AND STORE IT IN A VARIABLE CALLED LI
 * 
 *  4. THEN CREATE A IF STATEMENT WHICH CHECKS THE IF THE CHECKED VARIABLE IS TRUE.
 *  5. IF TRUE, ADD A CLASS OF 'responded' TO THE LI VARIABLE. IF FALSE, STORE ITS CLASSNAME AS A EMPTY STRING.
 */


ul.addEventListener('change', (e) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;
  
  if (checked) {
    listItem.className = 'responded';
  } else {
    listItem.className = '';
  }
});
  
/***
 * 
 *
 *  CREATE A CLICK EVENT FOR THE UL VARIABLE. THIS WILL LISTEN FOR BUTTONS IN THE LIST ITEM.
 * 
 *  1. FIRST CHECK IF THE USER HAS CLICKED ON A BUTTON.
 *  2. STORE THE EVENT TARGET IN A VARIABLE CALLED BUTTON.
 *  3. STORE THE EVENTS PARENT ELEMENT AND STORE IT IN A VARIABLE CALLED LI, AND ALSO STORE ITS GRANDPARENT IN A VARIABLE CALLED UL.
 *  
 *  4. CREATE A IF STATEMENT THAT WILL HAVE THREE BRANCHES.
 * 
 *  5. THE FIRST BRANCH WILL CHECK IF THE BUTTON VARIABLE'S TEXT CONTENT IS 'responded'. IN THE CONDITION REMOVE THE LI VARIAVLE FROM THE UL VARIABLE
 *  
 *  6. THE SECONED BRANCHWILL CHECK IF THE BUTTON VARIABLE'S TEXT CONTENT IS 'edit'.
 *  -  IN THIS CONDITION, GET A REFERENCE TO THE LIST ITEMS FIRST CHILD AND STORE IT IN A VARIABLE CALLED SPAN.
 *  -  THEN CREATE AN INPUT ELEMENT AND STORE IT IN A VARIABLE CALLED INPUT.
 *  -  DEFINE ITS TYPE AS TEXT AND VALUE TO WHATEVER THE TEXTCONTENT OF THE SPAN ELEMENT IS.
 *  -  THEN INSIDE THE LI VARIABLE, STORE THE INPUT ELEMENT BEFORE THE SPAN ELEMENT.
 *  -  THEN CHANGE THE TEXTCONTENT OF THE BUTTON TO 'save'.
 * 
 *  7. THE THIRD BRANCH WILL CHECK IF THE BUTTONS VAARIABLE'S TEXT CONTENT IS 'save'
 *  -  FOLLOW THE FIRST AND INSTUCTIONS IN STEP 6.
 *  -  SET THE SPAN TEXTCONTENT TO WHATEVER THE VALUE OF THE INPUT VALUE IS.
 *  -  THEN INSIDE THE LI VARIABLE, STORE THE SPAN ELEMENT BEFORE THE INPUT ELEMENT.
 *  -  REMOVE THE INPUT FROM THE LI VARIABLE
 *  -  THEN CHANGE THE TEXTCONTENT OF THE BUTTON TO 'save'.  
 */

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const button = e.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if (button.textContent === 'remove') {
      ul.removeChild(li);
    } else if (button.textContent === 'edit') { 
      const span = li.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.textContent = 'save';
    } else if (button.textContent === 'save') { 
      const input = li.firstElementChild;
      const span = document.createElement('span');
      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = 'edit';
    }
  }
});  
  
  
  
  
  
  
  
  
  
  