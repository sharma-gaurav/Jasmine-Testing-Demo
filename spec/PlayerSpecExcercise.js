describe("Player", function() {
    var player;
    var song;

    beforeEach(function() {
        player = new Player();
        song = new Song();
    });

    //Example 1
    it("should be able to play a Song", function() {
        player.play(song);
        expect(player.currentlyPlayingSong).toEqual(song);
        expect(player.isPlaying).toBeTruthy();
    });
//
    describe("when song has been paused", function() {
        beforeEach(function() {
            player.play(song);
            player.pause();
        });

        it("should indicate that the song is currently paused", function() {
            //Write your test here
        });

        it("should be possible to resume", function() {
            player.resume();
            //Write your test here
        });
    });
//
//    //Example 2
//    // demonstrates use of spies to intercept and test method calls
//    it("tells the current song if the user has made it a favorite", function() {
//        spyOn(song, 'persistFavoriteStatus');
//
//        player.play(song);
//        player.makeFavorite();
//
//        expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//    });
//
    //Example 3
    //demonstrates use of expected exceptions
    describe("#resume", function() {
        it("should throw an exception if song is already playing", function() {
            player.play(song);

            expect(function() {
                player.resume();
            }).toThrowError("song is already playing");
        });
    });
});
