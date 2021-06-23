const howToPlay = `This is the game of REVERSE. To win all you have to do is arrange a list of numbers (1 through 9) to numerical order from left to right
To move, you click on the number to reverse.
For example, if the current list is
2 3 4 5 1 6 7 8 9
and you click 5, the result will be
5 4 3 2 1 6 7 8 9
Now, if you click 1, then you win!
1 2 3 4 5 6 7 8 9`


export const DialogButton = () => (
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#howToPlay">
        How to play
    </button>
)

export const Dialog = () => (
    <div class="modal fade" id="howToPlay"  aria-labelledby="howToPlayLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="howToPlayLabel">How to Play</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                </div>
                <div class="modal-body">
                    <textarea class="modal-body " value={howToPlay} style="height:400px;width:100%"/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
)

