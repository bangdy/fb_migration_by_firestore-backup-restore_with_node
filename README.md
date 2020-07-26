## 목적

firebase 의 firestore의 db를 다운로드하고 업로드



## 출처

### 라이브러리

https://github.com/dalenguyen/firestore-backup-restore



## 사용방법

download로 json 파일을 받고, 그 받은 json 파일을 편집해서 수정 후, upload 한다.

Change directory 를 node_excute_codes 로 해서 아래의 방법으로 실행한다.



### config 파일 생성

해당 방법은 아래의 blog 내용 참고

https://copycoding.tistory.com/315

### download

```
node downloadCollection arg1 arg2
```

args1 -> firestore collection 이름 // matching 되지 않으면 error 출력

//args2 -> json 파일명 (.json  없이 입력)

### upload

```
node uploadCollection arg1
```

args1 -> json 파일명 (without .json)



## 사용시 주의사항

1. timeStamp object 는 *uploadCollection* 에서 options 의 property 위치를 배열에 추가해줘야 한다.
2. subCollection 이 있는 경우, 수정경로가 없으면 collection 생성이 안되니 주의한다.