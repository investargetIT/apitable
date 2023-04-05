# ทำความเข้าใจ APITable - ภาพรวมสถาปัตยกรรม

APITable ประกอบด้วยแนวคิดสองส่วน: โต๊ะทำงานและแผ่นข้อมูล

เวิร์กเบนช์จะรักษาโหนด องค์กร และข้อมูลของผู้ใช้ โดยให้บริการ SSO, การตรวจสอบ, ตัวจัดกำหนดการ, บริการอนุญาต เป็นต้น

แผ่นข้อมูลให้การทำงานร่วมกันแบบเรียลไทม์สำหรับผู้ทำงานร่วมกันหลายคนเพื่อใช้งานแผ่นข้อมูลในเวลาเดียวกัน สิ่งที่น่าสังเกตคือมีไลบรารีส่วนประกอบที่เรียกว่า Core ซึ่งพัฒนาด้วย Redux ไลบรารีหลักมีการคำนวณ OT และสามารถใช้ได้ทั้งส่วนหน้าและส่วนหลัง

สามารถดูแผนภาพที่เป็นรูปธรรมมากขึ้นด้านล่าง:

![Architecture Overview](../static/architecture-overview.png)

- UI: ให้อินเทอร์เฟซฐานข้อมูลสเปรดชีตที่ราบรื่น ใช้งานง่าย และรวดเร็วเป็นพิเศษ <canvas> เครื่องยนต์แสดงผล
- เว็บเซิร์ฟเวอร์: สร้างเว็บไซต์และแอปพลิเคชันบนเว็บแบบคงที่ เป็นมิตรกับ SEO และเข้าถึงผู้ใช้ได้อย่างมากโดยใช้ Nextjs
- เซิร์ฟเวอร์ส่วนหลัง: จัดการคำขอ HTTP เกี่ยวกับโหนด ผู้ใช้ องค์กร ฯลฯ
- เซิร์ฟเวอร์ซ็อกเก็ต: สร้างการเชื่อมต่อที่ยาวนานกับไคลเอนต์ผ่านโปรโตคอล WebSocket ทำให้สามารถสื่อสารสองทางและทำงานร่วมกันแบบเรียลไทม์ การแจ้งเตือน และคุณสมบัติอื่นๆ
- Room Server: จัดการการดำเนินงาน (OTJSON) ของแผ่นข้อมูล สื่อสารกับ Socket Server ผ่าน gRPC และยังมี API สำหรับนักพัฒนา
- เซิร์ฟเวอร์ Nest: จัดการคำขอ HTTP GET เกี่ยวกับแผ่นข้อมูล บันทึก มุมมอง ฯลฯ
- MySQL: เก็บข้อมูลถาวร เช่น แผ่นข้อมูล บันทึก มุมมอง ฯลฯ
- Redis: เก็บแคช เช่น เซสชันการเข้าสู่ระบบ ข้อมูลด่วน ฯลฯ
- S3: เก็บไฟล์ที่อัปโหลด