# xPath_Extension
# Web conference and chat


**made by**  Yohan 김요한<br>
**contact**  010-3905-1285<br>
**email address**  dugksl23@naver.com<br>

# 목차
#### 1. 프로젝트 소개
#### 2. 개발 환경
#### 3. 주요 기능 요약
#### 4. 주요 기능 설명

---

## 1. 프로젝트 소개

 - XPath 취득 프로그램


사용자가 특정 사이트의 특정 Item에 대하여 크롤링을 하고자 할 때, 
해당 Item의 XPath를 취득하여 크롤링을 수행한다. 
또한 보통은 XPath를 취득하기 위해서 크롬 개발자 도구를 이용한다.
이번 프로젝트는 이 점을 착안하여, XPath를 취득할 수 있는 확장프로그램을 개발하고자 하였으며, 
취득한 XPath들은 API를 호출하여 Request를 보내고, DB에 적재하는 데까지 개발 목표를 두었다.



## 2. 개발 환경

* **WAS** 
  * Apache-tomacat-8.5
  
* **Java EE IDE** 
  * IntelliJ
  
* **DB** 
  * MariaDB
  
* **개발 언어** 
  * **Back-end** 
    * Java (jdk 1.8)
     
  * **Front-end** 
    * HTML
    * CSS
    * JavaScript
       
* **형상관리**
  * GithuB


## 3. 주요 기능 요약

 #### 1. **클릭을 통한 Target의 XPath 취득**
  1) 해당 사이트의 모든 Click 이벤트 제거
	2) 클릭 이벤트를 통해 XPath 경로 취득 
	
 #### 2. **새창(childWindow)을 통해 XPath의 List화**



 #### 3. **API 호출 및 DB 적재**  

--- 

## 4. 주요 기능 설명


### XPath 취득 기능

![image](https://user-images.githubusercontent.com/68539491/117804870-43a8ba80-b293-11eb-8893-f0980499bb5d.png)

- **등록된 확장프로그램을 실행**
- **사용 버튼을 클릭 -> 해당 사이트의 모든 Click 이벤트를 제거**
- **MouseOver 이벤트를 통해, Target Node를 특정하기 위해서 Background Color(Pink)를 추가**
- **Click을 통해 Target Node의 XPath 취득 및 Target Node의 InnerText 값을 취득**


---

### XPath List를 DB에 적재

![image](https://user-images.githubusercontent.com/68539491/117804477-c8470900-b292-11eb-98d2-f52431514cca.png)

- **취득한 XPath들을 List로 나열**
- **Send 버튼을 클릭 -> XPath를 적재를 위한 API 호출**
- **XPath를 MariaDB에 적재**

