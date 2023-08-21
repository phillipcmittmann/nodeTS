-- DropForeignKey
ALTER TABLE "productorder" DROP CONSTRAINT "productorder_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "productorder" DROP CONSTRAINT "productorder_product_id_fkey";

-- AddForeignKey
ALTER TABLE "productorder" ADD CONSTRAINT "productorder_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productorder" ADD CONSTRAINT "productorder_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
