SELECT P.PRODUCT_ID, P.PRODUCT_NAME, PRICE * SUM(AMOUNT) TOTAL_SALES
FROM FOOD_PRODUCT P, FOOD_ORDER O
WHERE P.PRODUCT_ID = O.PRODUCT_ID
AND DATE_FORMAT(O.PRODUCE_DATE, '%Y%m') = '202205'
GROUP BY P.PRODUCT_ID
ORDER BY TOTAL_SALES DESC, P.PRODUCT_ID