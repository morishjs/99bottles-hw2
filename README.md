# 99Bottles HW2

## 개요
- 다양한 결제 시스템을 연동해보는 문제를 해결해봅니다.
  - 대한민국 내 결제 서비스를 제공하는 회사가 NHN, KG이니시스, 다날 등등 여러 개가 있는데 각각 서비스마다 제공하는 서비스 방식이 다릅니다. 그래서 개발자들이 결제 서비스를 추가한다고 하면 매번 새로운 개발 그리고 추가된 결제 수단에 대한 유지보수가 수반됩니다.
  - 이 과제에서 구현하고자 하는 것은 외부 개발자가 하나의 API spec으로 다양한 결제수단을 한번의 개발로 이용할 수 있는 서비스입니다.

## 요구사항
- 현재 이 서비스에서 제공하는 결제수단은 NaverPay, KakaoPay, Toss 입니다.
  - 
- 입력값에 따라 위에서 언급된 서비스들 중에 하나를 선택해서 `pay()` 함수를 호출합니다.
  - 각 서비스들의 리턴값은 다르지만 과제에서 구현하는 서버는 통일된 형식을 리턴해야 합니다.
  - 각 서비스들의 `pay()` 함수에 대한 유닛 테스트를 작성해주세요.
  - `test` 디렉토리에 `app.e2e-spec.ts` 에 각 서비스에 실제 요청을 보내는 테스트 케이스를 작성해주세요.