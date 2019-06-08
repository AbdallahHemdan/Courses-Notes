__FUNCTIONAL PROGRAMMING IN C++ USING LAMBDA (C++11 ↑)__

The purpose of functional programming is to ```write our functions like we write the 
mathmatical functions```

A Big important of funtional programming is ```to make the code does not pollute the global namespace```

```python
f(x) = x * x; 
f(x, y) = x ^ 2 + y ^ 2 + 2 * x*y; 
```

#### __NOTE__ 
in the above 2 functions  ```every thing is dependant only on its the input varibles 
and it be independant of any thing outside it``` .


the above functions does not change any of its input so it's called ```Immutable``` 
We Just creating a new value using the input values

#### __NOTE__ 
There is no a mathmatical funciton which change its input 

```python
f(x) = x++    ==> (❌) WRONG 
f(x) = x + 1  ==> (✔️) RIGHT
```
```cpp
#include <iostream>
#include <functional>

using namespace std;
int main() {
	// Lambda in c++ consists of ==>    [](){};
	//1
	// Here We write a function to print hello world and call it
	
	[]() {
		cout << "Hello World" << endl;
	}(); // () at the end is the calling of the function
	
```
  
```cpp
	//2
	// Here We write a function to return a value 
	
	int Returned_Value =  []() -> int {
		return 1599; 
	}();
	cout << Returned_Value << endl;
```	

```cpp
	//3 
	// Here we see that Lambda function can take a parameters like any other functions
	
	int Returned_Value_2 = [](int add) -> int {
		return 1599 + 100; 
	}(100);
	cout << Returned_Value_2 << endl;
```
```cpp		
	//4
	// Here instead of Just calling the function after creating it 
	// We will using function pointer
	// NOTE: We can using auto instead of function<returned_type(Parameter_List)>

	function<int(int)> Function_Pointer = [](int x) -> int{
		return 100 + x; 
	};

	int Returned_Value_3 = Function_Pointer(150); 
	cout << Returned_Value_3 << endl;
```
  
```cpp  
	//5
	// f(x, y) = x ^ 2 + y ^ 2 + 2 * x * y; 
	function<int(int, int)> Function_Pointer_2 = [] (int x, int y) -> int {
		int xsquare = [](int x) -> int { return x * x; }(x); 
		int ysquare = [](int y) -> int { return y * y; }(y);
		int twoxy = [](int x, int y) {return 2 * x*y;  }(x, y);
		return xsquare + ysquare + twoxy; 
	};
	int Returned_Value_4 =  Function_Pointer_2(5, 3); 
	cout << Returned_Value_4 << endl;
```
	
```cpp  
	// Now Let us take about Capture_List []
	// Note in Lambda functions we can not access any varible outside it ( either Local varibles)
	// To call the lacal variables inside the lambda function 
	// We use Capture_List to capture it 	
	//6
	int Local_Varible = 15; 
	auto Func = [Local_Varible]() { // here we pass the "Local_Variable" by value, So We can not change it 
		cout << endl << "The Local Varible  :" << Local_Varible << endl; 
		//Local_Varible++; // error: expression must be modifable lvalue
	};
	Func();
```

```cpp  
	//7
	// here we pass the "Local_Variable" by Reference, So We can change it
	auto Func_With_Capture_By_Reference = [&Local_Varible]() {
		++Local_Varible;
		cout << "Local Variable after incrementing it " << Local_Varible << endl;
	};
	Func_With_Capture_By_Reference();
	cout << Local_Varible << endl;

```

```cpp  
	//8 
	// What if we have many of local varibles, So specifing all of them in capture list will be 
	// Complecated task to do 
	// So insted of this we call only pass [=] to the capture List which mean pass 
	// all the local variables into out Lambda (By Value)

	int Local_int = 1599; 
	double Local_double = 1.599;
	auto PassAll = [=]() {
		cout << endl << "Int :" << Local_int << endl;
		cout << "Doubel :" << Local_double << endl;
	};
	PassAll();
```
  
```cpp  

	//9 
	// What if we have many of local varibles, So specifing all of them in capture list will be 
	// Complecated task to do 
	// So insted of this we call only pass [&] to the capture List which mean pass 
	// all the local variables into out Lambda (By Reference)

	int Local_int_2 = 1599;
	double Local_double_2 = 1.599;
	auto PassAll_2 = [&]() {
		Local_int_2++; 
		Local_double_2++; 
		cout << endl << "Int :" << Local_int_2 << endl;
		cout << "Doubel :" << Local_double_2 << endl;
	};
	PassAll_2();
```  

