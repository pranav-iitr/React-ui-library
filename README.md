# Library for button and badge
# Contributors 
## [Yash Yadav](https://github.com/yash-954)
## [Pranav Arya](https://github.com/pranav-iitr)

### pay now button
#### usage
``` import { PayNowCard } from '@pranav-arya/pranav-test' ```
#### props
##### **trigger**
###### it is function for triggered on clicking the button by default it is ```()=>{alert("Pay Now")} ``` 
###### pass a fat arrow function in **trigger** 

##### **head**
###### it is the text displayed below pay now on button by default it is "Presented by E-Cell IITR"  
###### pass a simple text

##### **styles**
###### it is used for passing custom css , targatable classes are
###### payOuterContainer
###### ppButton
###### ppText
###### ppText1
###### ppText2
###### pass a javascript object containg styles eg ``` <PayNowCard styles={ {payOuterContainer:{ background : "red"} } } /> ```
