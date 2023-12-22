function sendPlayerIdUpdate()
    local playerId = GetPlayerServerId(PlayerId()) -- Get the player's server ID
    SendNUIMessage({
        type = 'updatePlayerId',
        value = playerId
    })
end

-- Trigger the initial update when the player joins
AddEventHandler('playerSpawned', function()
    sendPlayerIdUpdate()
end)

-- Trigger updates every 5 seconds
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(2000) -- Wait for 2 seconds
        sendPlayerIdUpdate()
    end
end)
