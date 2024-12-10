import axios from 'axios'
import { createWriteStream } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url'

export const downImg = () => {
    // 获取当前文件的目录路径（等效于 __dirname）
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    // 图片的URL（请替换为实际的图片URL）
    const imageUrl = 'https://699pic.com/tupian-400098268.html'; 

    // 请求头，包括必要的认证信息（请替换为实际的Cookies）
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Cookie': 'acw_tc=1a142b5617338131218018867ec98a19b796a7aa38226d773b727037df0470; PHPSESSID=3e02240bb825ee5ed2067cf7f82c8d37; uniqid=6757e381c8ef9; act_layer_1=B; act_layer_2=B; act_layer_3=B; act_layer_4=A; act_layer_5=B; act_layer_6=B; act_layer_7=B; act_layer_9=B; act_layer_10=A; act_layer_11=C; login_view=1; enterDetailDown=0; user_uniqid=472C0E94F1904993; FIRSTVISITED=1733813127.763; fingerprint_data=a5afa2a68880e61d15409e2284cb0c1e; _clck=1wtrbw7%7C2%7Cfrl%7C0%7C1805; s_token=767bd42274f61ed8108b6c1486a378d0; Hm_lvt_1154154465e0978ab181e2fd9a9b9057=1733813130; HMACCOUNT=1FE1F8FE41F7046B; Hm_lvt_ddcd8445645e86f06e172516cac60b6a=1733813130; yinxiao_detail_float_left=1; from_data=YTo4OntzOjQ6Imhvc3QiO3M6MTA6IjY5OXBpYy5jb20iO3M6Mzoic2VtIjtiOjA7czoxMDoic291cmNlZnJvbSI7aTowO3M6NDoid29yZCI7TjtzOjM6ImtpZCI7aTowO3M6ODoic2VtX3R5cGUiO2k6MDtzOjQ6ImZyb20iO2k6MDtzOjY6ImNyZWF0ZSI7czoxOToiMjAyNC0xMi0xMCAxNDo1Njo1NiI7fQ%3D%3D; isVip=0; slotMachine1123=1; redirect=https%3A%2F%2F699pic.com%2Ftupian-400098268.html; visited_times=9; referer_page=detail:index_2; _clsk=nmwoug%7C1733813986376%7C8%7C0%7Cj.clarity.ms%2Fcollect; Hm_lpvt_ddcd8445645e86f06e172516cac60b6a=1733813986; Hm_lpvt_1154154465e0978ab181e2fd9a9b9057=1733813986; loginboxClose=9; ssxmod_itna=eqAxyDuDc7GQYrxlfxCxDT6o5oeDvxeGC4=Y9KUYBDBk74iNDnD8x7YDvmfo/UACEh+d3Wn+Y4oiYCgPhIXD7TvH4VnbSAH=/0r4GIDeKG2DmeDyDi5GRD0IeFD435GwD0eG+DD4DWbyIkMpKOaDDdqU9kZxGWDmRGDY5DEx0CZxDaGxO1r3KD0=ummagzW12PY40TsRK8B65xaQGw6W5DX1dDvgKkoFAsD/9XaBYPenbqjDWHbCmYql2Y=hGWjQbq7w0ib6xeYjGxwQ=iqYxiAqDWw7Geb2hDD=; ssxmod_itna2=eqAxyDuDc7GQYrxlfxCxDT6o5oeDvxeGC4=Y9KUYD8wcxxGNpdqGaW8Kjhw5Kr7qid=/7keh7=W7uY4D9Yk0thN66WhXG4ycDaQ59U7LuYs+XtBTjrqy=BgTpUowQFmhxd/2Ctnem8Q+jhGxUwteQ051KbxIWM+7zfhhz0IAlriLG3KxXhGYE+D4wW09/+bU8qmuB8j4vOATT3cGF7UxxPH3ha01W0j2KMoqyOQbIMaqPInuz=RaolEYsRoz=jxXYM+a=kDK83Y4FTYqt/6deoKhiAwhKXOUi0ykiIArg+0prkeuj8W7gekGQZnQL0LYrEvgjI7AkQI+nGYrwVWjEZvefGr63OnGqSrCBP4meUiPaCqrWYRZePem4iArjmcEK42eMxRvlEY1XxRe7reW/EKQuk7TPabReNoF2OSdp8Ph7Tu0UWE44oq9oYvCWKPa4=nRaEXtTf7dUbvsUP3hQIhD0FcxzWl6wg2iaQ6t2WvfdPtiunH12mlP7QUYIbDLYa9nIVPfECPqR7ZPqiCEIcKS8Ir6q1rTs+69n=pjwNgiYLL4+QQspdYq5aEwEYXAcOgqPDc3LDqrm90p+0wnZhN04DQFW+OIYuy9eWUeoKSwvR657u2masbh8YpQDdMvN9x9yrYAn5G/7I+p/iWYwgmRkKiSHsYD08DijdYD' // 替换为你的有效Cookies
    };

    // 下载图片的函数
    async function downloadImage(url, outputPath) {
        try {
            const response = await axios({
                url,
                method: 'GET',
                responseType: 'stream',
                headers: {
                    'User-Agent': headers['User-Agent'],
                    'Cookie': headers.Cookie // 替换为你的有效Cookies
                }
            });

            // 创建写入流，将图片保存到本地
            const writer = createWriteStream(outputPath);

            // 将响应流管道到写入流
            response.data.pipe(writer);

            // 监听写入完成事件
            return new Promise((resolve, reject) => {
                writer.on('finish', resolve);
                writer.on('error', reject);
            });
        } catch (error) {
            console.error('下载失败:', error.message);
            throw error;
        }
    }

    // 调用下载函数
    (async () => {
        try {
            const outputFilePath = join(__dirname, 'downloaded_image.jpg'); // 保存路径
            await downloadImage(imageUrl, outputFilePath);
            console.log('图片下载成功！保存路径:', outputFilePath);
        } catch (error) {
            console.error('下载过程中发生错误:', error);
        }
    })();

}