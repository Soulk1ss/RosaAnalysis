const PDFDocument = require('pdfkit');
const fs = require('fs');
const sendEmail = require('./sendEmail');

async function createPDF(score) {
    const doc = new PDFDocument();
    const writeStream = fs.createWriteStream(`${__dirname}/PDF/rosa_result_${score.name}.pdf`);
    doc.pipe(writeStream);

    doc.font('./font/Prompt-Regular.ttf')
        .fontSize(20)
        .text('คะแนนผู้ประเมิน', {
            align: 'center'
        });
    //----------------------------------------------- Category A -----------------------------------------------------
    doc.font('./font/Prompt-Bold.ttf')
        .moveDown(1)
        .fontSize(18)
        .text('หมวด A กลุ่มเก้าอี้', {
            align: 'left'
        });

    doc.font('./font/Prompt-Regular.ttf')
        .fontSize(15)
        .text(`ความสูงของเก้าอี้`, 70, 180)
        .font('./font/Prompt-Bold.ttf')
        .text(`${score.score_a1}`, 300, 180)
        .font('./font/Prompt-Regular.ttf')
        .text(`คะแนน`, 350, 180)

    doc.font('./font/Prompt-Regular.ttf')
        .fontSize(15)
        .text('ความลึกของเบาะเก้าอี้', 70, 220)
        .font('./font/Prompt-Bold.ttf')
        .text(`${score.score_a2}`, 300, 220)
        .font('./font/Prompt-Regular.ttf')
        .text('คะแนน', 350, 220)

    doc.font('./font/Prompt-Regular.ttf')
        .fontSize(15)
        .text('ที่พักแขน', 70, 260)
        .font('./font/Prompt-Bold.ttf')
        .text(`${score.score_a3}`, 300, 260)
        .font('./font/Prompt-Regular.ttf')
        .text('คะแนน', 350, 260)

    doc.font('./font/Prompt-Regular.ttf')
        .fontSize(15)
        .text('พนักพิง', 70, 300)
        .font('./font/Prompt-Bold.ttf')
        .text(`${score.score_a4}`, 300, 300)
        .font('./font/Prompt-Regular.ttf')
        .text('คะแนน', 350, 300)
    //----------------------------------------------- Category B -----------------------------------------------------  
    doc.font('./font/Prompt-Bold.ttf')
        .fontSize(18)
        .text('หมวด B กลุ่มจอคอมพิวเตอร์และโทรศัพท์', 70, 360);

    doc.font('./font/Prompt-Regular.ttf')
        .fontSize(15)
        .text('จอคอมพิวเตอร์', 70, 400)
        .font('./font/Prompt-Bold.ttf')
        .text(`${score.score_b1}`, 300, 400)
        .font('./font/Prompt-Regular.ttf')
        .text('คะแนน', 350, 400)

    doc.font('./font/Prompt-Regular.ttf')
        .fontSize(15)
        .text('โทรศัพท์มือถือ', 70, 440)
        .font('./font/Prompt-Bold.ttf')
        .text(`${score.score_b2}`, 300, 440)
        .font('./font/Prompt-Regular.ttf')
        .text('คะแนน', 350, 440)

    //----------------------------------------------- Category C -----------------------------------------------------

    doc.font('./font/Prompt-Bold.ttf')
        .fontSize(18)
        .text('หมวด C กลุ่มเม้าส์และแป้นพิมพ์', 70, 500);

    doc.font('./font/Prompt-Regular.ttf')
        .fontSize(15)
        .text('เมาส์', 70, 540)
        .font('./font/Prompt-Bold.ttf')
        .text(`${score.score_c1}`, 300, 540)
        .font('./font/Prompt-Regular.ttf')
        .text('คะแนน', 350, 540)

    doc.font('./font/Prompt-Regular.ttf')
        .fontSize(15)
        .text('แป้นพิมพ์', 70, 580)
        .font('./font/Prompt-Bold.ttf')
        .text(`${score.score_c2}`, 300, 580)
        .font('./font/Prompt-Regular.ttf')
        .text('คะแนน', 350, 580)

    //----------------------------------------------- Score Rosa -----------------------------------------------------
    doc.font('./font/Prompt-Medium.ttf')
        .fontSize(15)
        .text(`คะแนนรวม ROSA ${score.score_rosa} คะแนน`, 200, 640)

    if (score.score_rosa > 5) {
        doc.font('./font/Prompt-Medium.ttf')
            .fontSize(15)
            .fillColor('#D05353')
            .text('มีความเสี่ยง ควรปรับท่านั่งทำงาน', 180, 670)
    }
    //----------------------------------------------- Score Rosa -----------------------------------------------------

    let stepPage = []

    if (score.score_a1 > 4) {
        stepPage.push(1)
    }
    if (score.score_a2 > 4 || score.score_a3 > 4 || score.score_a4 > 4) {
        stepPage.push(2)
    }
    if (score.score_c1 > 4 || score.score_c2 > 4) {
        stepPage.push(3)
    }
    if (score.score_b1 > 4 || score.score_b2 > 4) {
        stepPage.push(4)
    }
    if (score.score_rosa > 5) {
        stepPage.push(5)
    }

    stepPage.forEach((element, index) => {
        if (index === 0) {
            doc.addPage().font('./font/Prompt-Regular.ttf')
                .fontSize(20)
                .text("ข้อเสนอแนะในการจัดสถานีงาน", {
                    align: 'center'
                })
                .moveDown(1);
            doc.image(`./image/step/${element}.png`, { //path/to/image.png
                fit: [500, 500],
                align: 'center',
            });
        } else {
            doc.addPage()
                .image(`./image/step/${element}.png`, { //path/to/image.png
                    fit: [500, 500],
                    align: 'center',
                });
        }

    });
    doc.end();

    writeStream.on('finish', function () {
        console.log('Create PDF success.')
        console.log(score.e_mail)
        sendEmail(score.e_mail, score.name);
    })

}


module.exports = { createPDF };