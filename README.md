# xPath_Extension
# Web conference and chat


**made by**  Yohan 김요한<br>
**contact**  010-3905-1285<br>
**email address**  dugksl23@naver.com<br>
**hosting addrres**  <http://13.209.87.252>

# 목차
#### 1. 프로젝트 소개
#### 2. 개발 환경
#### 3. 개발 의존성
#### 4. 주요 기능 요약
#### 5. 주요 기능 설명

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
  



## 4. 주요 기능 요약

 #### 1. **클릭을 통한 Target의 XPath 취득**
  1) 해당 사이트의 모든 Click 이벤트 제거
	2) 클릭 이벤트를 통해 XPath 경로 취득 
	
 #### 2. **새창(childWindow)을 통해 XPath의 List화**
	1) 회원가입
	2) 회원정보 수정
	3) 회원탈퇴
	4) 아이디 및 비밀번호 찾기 
 	
 #### 3. **API 호출 및 DB 적재**  

--- 

### 게시판 
 - **게시글 읽기 페이지**

![image](https://user-images.githubusercontent.com/68539491/110901249-624c0d00-8347-11eb-927c-26abfa4cc20a.png)
 

 - **게시글 테이블 페이지**

![image](https://user-images.githubusercontent.com/68539491/110902995-151d6a80-834a-11eb-8fb7-0b0419936f0c.png)

---

### 마이페이지 (회원) 
 - **회원가입 페이지**

![image](https://user-images.githubusercontent.com/68539491/110903363-aee51780-834a-11eb-86bf-8ca069198f19.png)

 - **회원정보 보기 페이지**

![image](https://user-images.githubusercontent.com/68539491/110903562-fc618480-834a-11eb-9590-7c731e9c644a.png)

---

### 채팅
 - **친구 목록 페이지**

![image](https://user-images.githubusercontent.com/68539491/110903690-29ae3280-834b-11eb-9fd5-aecf9ad02ccd.png)


 - **채팅 목록 페이지**
 
![image](https://user-images.githubusercontent.com/68539491/110903708-33379a80-834b-11eb-8608-4d20dc86be08.png)


 - **1:1 채팅 페이지**
 
![image](https://user-images.githubusercontent.com/68539491/110903744-3fbbf300-834b-11eb-9fd6-8ec704b0d15f.png)


---

### 화상 회의 
 - **화상 회의 개최**
 
![image](https://user-images.githubusercontent.com/68539491/110904064-bce76800-834b-11eb-81cd-9929ed48a724.png)
![image](https://user-images.githubusercontent.com/68539491/110904137-d983a000-834b-11eb-8688-aa873eb48f4f.png)
![image](https://user-images.githubusercontent.com/68539491/110904279-1354a680-834c-11eb-8be3-641494766d51.png)


---

### 화상 회의 초대 / 참가
 - **화상 회의 초대**
 
![image](https://user-images.githubusercontent.com/68539491/110904398-3ed79100-834c-11eb-8801-aee8a5cab171.png)

![image](https://user-images.githubusercontent.com/68539491/110904420-49922600-834c-11eb-8a99-4b3f9306cc15.png) 

  - **화상 회의 참가**
  
![image](https://user-images.githubusercontent.com/68539491/110904456-5adb3280-834c-11eb-8992-e6c6bf92bfb9.png)

	


 


 
