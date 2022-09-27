
	var state =-1;
	var main = document.getElementById('addTags');

	
	const interval = setInterval(() => {		
		if (document.documentElement.clientWidth < document.documentElement.clientHeight) 
		{
			if(state!=0)
			{
				const main = document.getElementById('addTags');
				if(state==1)
					main.innerHTML = '';
				state = 0;
				
				
				const HTMLCode1 = `
					<label class="heading-format-vertical">Progress<label>
						<label >
							<div class="circle-wrap" >
							  <div class="circle">
							 <div class="mask half">
								<div class="fill"></div>
							  </div>
							  
							  <div class="mask full">
							   <div class="fill"></div>
							  </div>

							  </div>
							  
							  <div class="inside-circle"></div>
							  
							</div>
						</label>

						<table class="sliderPosition-vertical">
						<tr>
							<td>
								<div>
									<input id="volumeValue1" oninput="setProgressValue()">
								</div>
							</td>
							<td class="text-size" valign="middle">&nbsp;&nbsp;&nbsp;Volume</td>
						</tr>

						<tr>
							<td>
								<!-- Rounded Animate switch -->
								<label class="switch">
								  <input id="sliderAnimate" type="checkbox" onclick="startAnimation()"> 
								  <span class="slider round"></span>		 
								</label>
							
							</td>
							<td class="text-size" valign="middle">
								&nbsp;&nbsp;&nbsp;Animate
							</td>
						</tr>

						<tr>
							<td>
							<!-- Rounded Hide switch -->
							<label class="switch">
							  <input id="sliderHide" type="checkbox" onclick="hideObject()">
							  <span class="slider round" ></span>
							</label>
							</td>
							<td class="text-size" valign="middle">
								&nbsp;&nbsp;&nbsp;Hide
							</td>
						</tr>
						</table>

				`;
				
				main.innerHTML = HTMLCode1;
				
				
				}
			} else 
			{
				if(state!=1)
				{
					const main = document.getElementById('addTags');
					
					if(state==0)
						main.innerHTML = '';
					state = 1;
				
				
					const HTMLCode2 =`
						
						<label class="heading-format-horizontal">Progress<label>

						<table class="progress-bar-horizontal">
						<tr>
							<td>
								<label >
									<div class="circle-wrap" >
										  <div class="circle">
										 <div class="mask half">
											<div class="fill"></div>
										  </div>
										  
										  <div class="mask full">
										   <div class="fill"></div>
										  </div>

										  </div>		
										  <div class="inside-circle"></div>		  
									</div>
								</label>
							</td>
							<td>&nbsp;&nbsp;&nbsp;</td>

							<td>
								<table class="sliderPosition-horizontal">
									<tr>
										<td>
											<div>
												<input id="volumeValue1" oninput="setProgressValue()">
											</div>
										</td>
										<td class="text-size" valign="middle">&nbsp;&nbsp;&nbsp;Volume</td>
									</tr>

									<tr>
										<td>
											<!-- Rounded Animate switch -->
											<label class="switch">
											  <input id="sliderAnimate" type="checkbox" onclick="startAnimation()"> 
											  <span class="slider round"></span>		 
											</label>
										
										</td>
										<td class="text-size" valign="middle">
											&nbsp;&nbsp;&nbsp;Animate
										</td>
									</tr>

									<tr>
										<td>
										<!-- Rounded Hide switch -->
										<label class="switch">
										  <input id="sliderHide" type="checkbox" onclick="hideObject()">
										  <span class="slider round" ></span>
										</label>
										</td>
										<td class="text-size" valign="middle">
											&nbsp;&nbsp;&nbsp;Hide
										</td>
									</tr>
								</table>
							</td>
						</tr>
						</table>
					`;
					main.innerHTML = HTMLCode2;
					
				}
								
			}
		}, 500);		
//}




