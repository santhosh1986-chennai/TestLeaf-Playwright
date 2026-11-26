import {chromium, webkit, test} from '@playwright/test';

test ('Open Redbus homepage', async ({}, Compare)=> {

    if(Compare.project.name !== 'chromium') 
        {
        return
    }

 let edgebrowser = await chromium.launch({headless:false, channel:'msedge'})
 let edgecontext = await edgebrowser.newContext()
 let edgepage = await edgecontext.newPage()

    await edgepage.goto('https://www.redbus.in/')
    
    console.log(edgepage.url())
    console.log(await edgepage.title())
    await edgepage.waitForTimeout(3000)

 let webkitbrowser = await webkit.launch({headless:false})
 let webkitcontext = await webkitbrowser.newContext()
 let webkitpage = await webkitcontext.newPage()

    await webkitpage.goto('https://www.flipkart.com/')
    console.log(webkitpage.url())
     console.log(await webkitpage.title())
    await webkitpage.waitForTimeout(3000)

})