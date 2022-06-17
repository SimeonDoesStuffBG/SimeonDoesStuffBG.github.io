function createSkeleton(){
    // основна кост
			var bones = [];
			pelvis = new THREE.Bone();
			bones.push(pelvis);

			// кости на единия крак
			legA1 = new THREE.Bone();
			legB1 = new THREE.Bone();
			legC1 = new THREE.Bone();
		    legD1 = new THREE.Bone(); // фиктивна кост
			
			bones.push(legA1,legB1,legC1,legD1);

			// кости на другия крак
			legA2 = new THREE.Bone(),
			legB2 = new THREE.Bone(),
			legC2 = new THREE.Bone(),
			legD2 = new THREE.Bone(); // фиктивна кост

			bones.push(legA2,legB2,legC2,legD2);

			// кости на гръбнака
			backA = new THREE.Bone(),
			backB = new THREE.Bone(),
			backC = new THREE.Bone(),
			backD = new THREE.Bone(); // фиктивна кост

			bones.push(backA,backB,backC,backD);

			// кости на врата и главата
			neck = new THREE.Bone(),
			head = new THREE.Bone();
			
			bones.push(neck,head);

			// кости на едната ръка
			armA1 = new THREE.Bone(),
			armB1 = new THREE.Bone(),
			armC1 = new THREE.Bone(),
			armD1 = new THREE.Bone();
			
			bones.push(armA1, armB1,armC1,armD1);

			// кости на другата ръка
			armA2 = new THREE.Bone(),
			armB2 = new THREE.Bone(),
			armC2 = new THREE.Bone(),
			armD2 = new THREE.Bone();
			
			bones.push(armA2, armB2,armC2,armD2);

			// свързаност на костите
			pelvis.add( legA1, legA2 );

			legA1.add( legB1 );
			legB1.add( legC1 );
			legC1.add( legD1 );

			legA2.add( legB2 );
			legB2.add( legC2 );
			legC2.add( legD2 );
			
			pelvis.add( backA );
			backA.add( backB );
			backB.add( backC );
			backC.add( backD );
			
			backD.add( neck );
			neck.add( head );
			
			backD.add( armA1, armA2 );
			armA1.add( armB1 );
			armB1.add( armC1 );
			armC1.add( armD1 );
			armA2.add( armB2 );
			armB2.add( armC2 );
			armC2.add( armD2 );
			
			// позиция на костите
			pelvis.position.y = 20;

			legA1.position.y = -2;
			legA1.position.z = 5;
			legB1.position.y = 20;
			legC1.position.y = 15;
			legD1.position.y = 5;

			legA1.rotation.z = THREE.Math.degToRad( 180 );
			legC1.rotation.z=THREE.Math.degToRad(-90);

			legA2.position.y = -2;
			legA2.position.z = -5;
			legB2.position.y = 20;
			legC2.position.y = 15;
			legD2.position.y = 5;

			legA2.rotation.z = THREE.Math.degToRad( 180 );
			legC2.rotation.z=THREE.Math.degToRad(-90);

			backA.position.y = 5;
			backB.position.y = 7;
			backC.position.y = 9;
			backD.position.y = 5;
			
			backA.rotation.z = THREE.Math.degToRad( 10 );
			backB.rotation.z = THREE.Math.degToRad( -10 );
			backC.rotation.z = THREE.Math.degToRad( -10 );
			backD.rotation.z = THREE.Math.degToRad( 10 );

			neck.position.y = 2;
			head.position.y = 5;
			
			neck.rotation.z = THREE.Math.degToRad( 0 );
			
			armA1.position.y = -1;
			armA1.position.z = 5;
			armB1.position.y = 13;
			armC1.position.y = 13;
			armD1.position.y = 5;
			
			armA1.rotation.z = THREE.Math.degToRad( 180 );
						
			armA2.position.y = -1;
			armA2.position.z = -5;
			armB2.position.y = 13;
			armC2.position.y = 13;
			armD2.position.y = 5;

			armA2.rotation.z = THREE.Math.degToRad( 180 );
			
			// показване на скелета
			skull = new THREE.Skeleton(bones);
			var helper = new THREE.SkeletonHelper( pelvis );
			scene.add( helper, pelvis );

			
		}

function animateSkeleton(t){
	var s = Math.sin(t);
	
	var p = Math.sin(t - Math.PI/4);

	legA1.rotation.y = THREE.Math.degToRad( 10 * s );
    legA1.rotation.z = THREE.Math.degToRad( 180 + 30*s );
	legB1.rotation.z = THREE.Math.degToRad( 30 + 30*s);
	legC1.rotation.z = THREE.Math.degToRad( -70 + 30*p );

	legA2.rotation.y = THREE.Math.degToRad( 10*s );
	legA2.rotation.z = THREE.Math.degToRad( 180-30*s );
	legB2.rotation.z = THREE.Math.degToRad( 30 - 30*s );
	legC2.rotation.z = THREE.Math.degToRad( -70 - 30*p );

	armA1.rotation.z = THREE.Math.degToRad(180 - 30 * s);
	armB1.rotation.y = THREE.Math.degToRad(20 + 20*s);
	armB1.rotation.z = THREE.Math.degToRad(-30 - 30*s);
	armC1.rotation.z = THREE.Math.degToRad(-30 - 30*s);

	armA2.rotation.z = THREE.Math.degToRad(180 + 30 * s);
	armB2.rotation.y = THREE.Math.degToRad(-20 - 20*s);
	armB2.rotation.z = THREE.Math.degToRad(-30 + 30*s);
	armC2.rotation.z = THREE.Math.degToRad(-30 + 30*s);
}
