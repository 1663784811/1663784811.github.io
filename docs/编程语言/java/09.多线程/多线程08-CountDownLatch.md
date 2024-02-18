---
article: false
title: 多线程08-CountDownLatch
---

```java
import lombok.Getter;
import java.util.concurrent.CountDownLatch;

public class CountDownLatchTest {
    public static void main(String[] args) throws Exception {
        CountDownLatch countDownLatch = new CountDownLatch(6);
        for (int i = 1; i <= 6; i++) {
            new Thread(() -> {
                System.out.println(Thread.currentThread().getName() + "\t" + "国,灭亡");
                countDownLatch.countDown();
            }, CountryEnum.forEach(i).getName()).start();
        }
        countDownLatch.await();
        System.out.println("秦统一");
    }
}

enum CountryEnum {
    /**
     *
     */
    ONE(1, "齐"),
    /**
     *
     */
    TWO(2, "楚"),
    /**
     *
     */
    THREE(3, "燕"),
    /**
     *
     */
    FOUR(4, "赵"),
    /**
     *
     */
    FIVE(5, "魏"),
    /**
     *
     */
    SIX(6, "韩");

    CountryEnum(Integer code, String name) {
        this.code = code;
        this.name = name;
    }

    @Getter
    private Integer code;
    @Getter
    private String name;

    public static CountryEnum forEach(int index) {
        CountryEnum[] countryEnums = CountryEnum.values();
        for (CountryEnum countryEnum : countryEnums) {
            if (index == countryEnum.getCode()) {
                return countryEnum;
            }
        }
        return null;
    }
}
```






