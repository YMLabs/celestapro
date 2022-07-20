import React from 'react'

function Footer() {
  return (
<footer class="">
  <div class="p-10 bg-[#50B291] text-white">
    <div class="w-full mx-auto text-center sm:text-left">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 ml-4 md:ml-12">
        <div class="mb-5">
          <h4 class="text-2xl pb-4 font-bold">Company</h4>
          <p class="text-white">
              455 Burbank,  <br/>
              California, CA 90210 <br/>
              United States<br/>
            <span class="font-bold">Phone:</span> 637-4536 
            
            <span class="font-bold">Email:</span> info@email.com
          </p>
        </div>
        <div class="mb-5">
          <h4 class="pb-4 font-semibold">Customer Services</h4>
          <ul class="text-white">
            <li class="pb-4"> <a href="#" class="hover:text-yellow-500">Features</a></li>
            <li class="pb-4"> <a href="#" class="hover:text-yellow-500">Pricing</a></li>
            <li class="pb-4"> <a href="#" class="hover:text-yellow-500">Integration</a></li>
            <li class="pb-4"> <a href="#" class="hover:text-yellow-500">Template</a></li>
            <li class="pb-4"> <a href="#" class="hover:text-yellow-500">Docs</a></li>
          </ul>
        </div>
        <div class="mb-5">
          <h4 class="pb-4 font-semibold">Company</h4>
          <ul class="text-white">
            <li class="pb-4"> <a href="#" class="hover:text-yellow-500">About</a></li>
            <li class="pb-4"> <a href="#" class="hover:text-yellow-500">Careers</a></li>
            <li class="pb-4"> <a href="#" class="hover:text-yellow-500">Forum</a></li>
            <li class="pb-4"> <a href="#" class="hover:text-yellow-500">Blog</a></li>
            <li class="pb-4"> <a href="#" class="hover:text-yellow-500">Community</a></li>
          </ul>
        </div>
        <div class="mb-5">
          <h4 class="pb-4 font-semibold">Legal</h4>
          <ul class="text-white">
            <li class="pb-4"> <a href="#" class="hover:text-yellow-500">Security</a></li>
            <li class="pb-4"> <a href="#" class="hover:text-yellow-500">Terms of Use</a></li>
            <li class="pb-4"> <a href="#" class="hover:text-yellow-500">Privacy Policy</a></li>
            <li class="pb-4"> <a href="#" class="hover:text-yellow-500">Terms of Integration</a></li>
            <li class="pb-4"> <a href="#" class="hover:text-yellow-500">Imprint</a></li>
            </ul>
        </div>
      </div>
    </div>
  </div>
  
</footer>

  )
}

export default Footer