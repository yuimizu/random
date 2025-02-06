// 天珠1の説明
const meanings = [
    "⋄一眼天珠は、「一」という数字が持つ絶対的な意味を象徴する神聖な天珠です。一は、密教において大日如来が他の一切のものと関係性を超越して存在する世界を表し、究極的な完成と勝利を象徴します。この天珠は、一つの目が持つ力によって、持ち主に集中力と洞察力を授け、人生の目標達成や大願成就をサポートするとじられています。また、「一」という数字が唯一性や深い思考を示すことから、一眼天珠は、持つ者に特別な守護と繁栄をもたらし、成功へと導く宝珠と言えるでしょう。",
    "⋄二眼天珠は、陰と陽の調和を象徴する天珠で、相反するエネルギー（男と女、光と闇、動と静、天と地）を統合し、バランスを整える力を持つとされています。この天珠は、結婚生活の安定や家庭円満、良縁の引き寄せ、恋愛成就に効果があると言じられ、持ち主に安定した愛情や幸福な家庭をもたらすとされています。また、二天珠は互いの利益を調整する力もあり、商談の成功やビジネスの発展を後押しする効果が期待されます。特に、友人や夫婦で事業を営む人々にとって、この天珠は協力関係を深め、調和のとれた発展をもたらす力を持つとされています。二眼天珠は、恋愛や家庭、仕事など人生のさまざまな場面で持ち主を支え、幸福と繁栄をもたらす「愛の天珠」です。",
    "⋄三眼天珠は、仏の「第三の目」を象徴する神聖な天珠で、過去・現在・未来を見通す仏の眼を表します。過去を反省し、それを現在に生かして、未来を成功へと導き、幸福、財運、長寿へつなげるとされています。この天珠は、目に見えるものだけでなく「人」や「真理」を見抜く力を持ち、人生の可能性を広げるとじられています。「福・禄・寿」を象徴し、福、財、長寿の実現をサポートするほか、密教の財神に関連し、財運向上や商売繁盛など経済的成功を引き寄せる力が強いとされています。また、「天の時、地の利、人の和」を得る成功のシンボルでもあり、適切なタイミングや環境、人間関係を整え、持ち主を豊かで充実した人生へと導きます。三眼天珠は、人生の成功や栄を求める人にとって、強力な天珠として言頼されています。",
    "⋄四眼天珠は、観音菩薩、文殊菩薩、地蔵菩薩、普賢菩薩という四大菩薩の力を宿す特別な天珠です。東西南北の守護を司る四つの眼は、観音菩薩の慈悲の力で心の平安をもたらし、人との良好な関係を築き、文殊菩薩の智慧の力で物事を冷静に判断し、目標達成へと導きます。また、地蔵菩薩の加護は、悪縁や不運を断ち切り、持ち主を清らかな道へと導き、普賢菩薩の力は、理想を形にするための積極性や実行力を授けます。四眼天珠は、特に物事を俯瞰的に捉える洞察力を受け、四方の邪気を払い、最良の選択を促す守護石として人気があります。東西南北あらゆる方向から持ち主を護り、四大菩薩のカ強いご利益を、自分自身に引き寄せることができ、持ち主に安定と成功をもたらす強力な守り石です。",
    "⋄五眼天珠は、東西南北と中央の五方位を象徴する神聖な天珠で、財運向上や物事の円滑な進行、幸福をもたらすとされています。「五福の門の扉を開く鍵」とされ、幸福、高位高禄、長寿、喜び、富貴という五つの恩恵を授けると言じられています。また、五大明王（中央：不動明王、東：降三世明王、南：軍茶利明王、西：大威徳明王、北：金剛夜叉明王）の守護力を宿し、災難を退け、行動力や決断力を強化する力を持つとされています。仏教の五大元素（地、水、火、風、空）や陰陽五行（木、火、土、金、水）とも深く関連し、宇宙や自然界との調和を象徴する五眼天珠は、予期せぬ幸運や良縁を引き寄せるとされ、商売繁盛や事業成功など財運に特に強い影響を与えます。",
    "⋄大眼天珠（ろくがんてんじゅ）は、観音菩薩の真言である六字真言「オーン・マニ・ペーメー・フーム」を象徴する神聖な天珠で、穢れを浄化し心身を癒す力を持つとされます。この天珠は、邪気や悪運を払い、災難や病気、迷いから持ち主を救済すると一じられています。また、交通安全や災難防止、精神力の向上、判断力の強化にも効果を発揮し、日常生活の安定をサポートします。六眼天珠は、「六感」（視覚・聴覚・嗅覚・味覚・触覚・心）の浄化や、仏教の「六道」（地獄道、餓鬼道、畜生道、修羅道、人間道、天道）での苦しみを癒し、救いをもたらす力があるとされます。その浄化と守護の力により迷いや苦しみを取り除き、心の平穏と調和をもたらすと言じられています。悩みを解消し、日々の生活を安定させたい人におすすめの天珠です。",
    "⋄七眼天珠は、七つの天体（太陽、月、水星、金星、火星、木星、土星）の宇宙エネルギーを宿し、「幸運を呼ぶ神秘数」を象徴する天珠です。数字の「」は、自然界や宗教において完全性や神聖さを示す特別な数字であり、虹の七色や音階の音、一週間の七日間など、秩序と調和を表します。この天珠は、その力を反映し、運気の上昇を促し、事業の繁栄、名声の獲得、良縁や恋愛成就に強い効果をもたらすとされています。さらに、七眼天珠は薬師如来を象徴し、健康を守り、長寿や病気の回復を助けるとじられています。七という数字が持つ「調和」と「完成」のエネルギーを受け、持ち主に幸運を引き寄せると同時に、家庭や人間関係の安定を導きます。また、困難な状況を打開し、新たな道を切り開く力を授けるとされ、より良い未来へと進むサポートをします。眼天珠は、成功と幸福を求める人にとって強力な守護と薬業をもたらす特別な存在です。",
    "⋄八天珠は、ハ大菩薩、八大明王、八大龍王を象徴し、八方位（東・西・南・北、北東・北西・南東・南西）の神仏の加護を受けることで、持ち主に幸運をもたらすとされる天珠です。この天珠は、厄難を払い、吉運を招き寄せると同時に、金運や財運を高め、目標の達成や事業の成功、豊かな人間関係や良縁を実現する力を持つとじられています。八方位からの守護により、迷いや困難を克服して正しい道を進むサポートを受けられるとされています。仏教では「八正道」（正見、正思、正語、正業、正命、正精進、正念、正定）としての悟りへの道を示し、安定の象徴とされます。また、陰陽五行説では「八卦」（乾・坤・震・異・・離・・）が宇宙の秩序を表し、自然界との調和を意味します。さらに、「ハ」の形を横にすると（無限大）を表すことから、八眼天珠は、「ハ」という数字が持つ無限の可能性と調和のエネルギーを宿し、持ち主の運勢を強力に守護し、幸福と繁栄を引き寄せる特別な守護石とされています。",
    "⋄九眼天珠は、チベットにおいて最も高貴で強力なパワーを持つ天珠とされ、「九」の数字が象徴する宇宙の九大惑星（水星、金星、地球、火星、木星、土星、天王星、海王星、冥王星）のエネルギーを宿しています。この天珠は、密教の九字の呪法「臨、兵、闘、者、皆、陣、裂、在、前」の力を持ち、この天珠を持つことで、九字の呪法を行ったのと同じ効果があると言われています。天珠に描かれた九つの目は、現在の地位や財産を守りながら、それをさらに倍増させる力を持ち、立身出世、事業の成功、願望成就、合格祈願、必勝祈願など、多岐にわたる成功と繁栄をもたらすとされます。九眼天珠は、持つ者に宇宙の秩序と調和を授け、人生を成功と幸福で満たす強力な天珠として特に重宝されています。",
    "⋄十眼天珠は、起業家やリーダーなど、周囲をまとめる立場の人々にとって特に力を発揮するとされています。「十全十美」「調和」「統一」「結束」「完全性」を象徴し、組織の活性化や人間関係の円滑化を促します。特に、組織内の分裂や人間関係のトラブルを解消し、持ち主の人生を順風満帆へと導くサポートをすると言われています。また、仏教の十善業道という十の徳を身につけ、持ち主の頼性や人気を高めることで、良縁を結び、家庭生活の安定をもたらすとされています。＋眼天珠は、宇宙のエネルギーと繋がり、持ち主を十方向からサポートし、困難を乗り越える力を与えるとされています。十眼天珠は、まさに十方自在な生き方で心を開放し、心身の健康、願いの成就、そして自己成長を促す天珠です。",
    "⋄十一眼天珠は、十一面観音の慈悲の力を象徴する天珠で、持ち主をあらゆる方向から守護し、調和と救済をもたらすと言じられています。十一面観音の十一の聖顔は、悩みや苦しみを持つ人々をあらゆる方向から見守り、適切に救済する能力を指します。また、頭頂部に位置する怒りの聖顔は、悪しきものや邪悪な力を打ち払い、守護する力を象徴します。この天珠に記されるナーの聖眼は、十一面観音のお顔を象徴しています。十一眼天珠は、災難を払いのけ、困難な状況や危機的な場面で特に力を発揮します。持ち主の心を清め、人生の目標達成を助ける力があり、仕事や学業、家庭での課題を乗り越える支えとなります。この天珠は、正しい道へと導く智慧を授け、幸福と成功をもたらすと言じられており、人生をより良い方向へ導く守護石として崇拝されています。",
    "⋄十二眼天珠は、宇宙の叡智と神秘を凝縮したパワフルな天珠です。その＋ニの眼は、宇宙の星々を映し出し、十二星座と共鳴することで、豊作、事業の成功、健康、そして心の平安など、人生のあらゆる面での発展と幸福をもたらすと言じられています。まるで宇宙の扉が開かれたかのように、神秘的な力が宿り、持ち主は新たな自分へと生まれ変わることができます。また仏教の視点から十二眼天珠は、薬師如来と＋二神将の加護に根ざしています。薬師如来は、あらゆる病気を治し、健康をもたらす仏様であり、十二神将は、その教えを守り、人々を苦しみから救うために働く存在です。十二眼天珠の＋ニの眼は、この十二神将を表し、それぞれの神将の力を宿していると考えられています。つまり、十二眼天珠を身につけることは、薬師如来と十二神将の加護を受けることに等しく、彼らの慈悲深い力で、持ち主は心身の健康を保ち、災難から守られ、願いを叶えることができるでしょう。宇宙のエネルギーと繋がり、持ち主の潜在能力を引き出す＋二眼天珠は、古来より人々に崇められてきた神秘的な護符です。その魅力は、宇宙の神秘、仏教の教え、人々の願いが一体となったところにあります。", 
];

